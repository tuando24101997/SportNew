const express = require('express');
const findModel = require('../models/find.model');
const router = express.Router();

router.get('/:catId/categories', async(req, res)=>{
    const loadPost = await findModel.loadPost(req.params.catId);
    res.render('posts/find', {
        loadPost : loadPost,
    })
})

module.exports = router;