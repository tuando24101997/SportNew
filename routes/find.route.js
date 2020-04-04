const express = require('express');
const indexModel = require('../models/index.model');
const config = require('../config/default.json');
const router = express.Router();

router.get('/:catId/categories', async(req, res)=>{

    const limit = config.page.limit;
    const catId = req.params.catId;
    const countByCat = await indexModel.CountByCat(catId);
    const total = countByCat[0].total;
    let page = Math.floor(total/limit);
    if ( total % limit > 0 ) {page++};
    const page_number = [];
    const nPage = req.query.page || 1;
    if ( nPage < 1 ) nPage = 1;
    const offset = ( nPage - 1 )*limit;
    for ( var i = 1; i <= page; i++ ){
        page_number.push({
            value: i,
            isCurrent: i === +nPage,
        });
    }
    const loadPost = await indexModel.PageForCat(catId, offset);
    const nameTitle = await indexModel.CatForId(catId);
    res.render('posts/find', {
        loadPost: loadPost,
        page_number,
        title: nameTitle[0].catName,
        temPage: +page >= 2,
    })
})

module.exports = router;