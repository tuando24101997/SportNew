const postModel = require('../models/post.model');
const indexModel = require('../models/index.model');
const express = require('express');
const router = express.Router();


router.get('/:postId/categories', async(req, res)=>{
    const loadCat = await indexModel.loadCat();
    const loadPost = await postModel.loadPost(req.params.postId);
    const loadSuggetPost = await postModel.loadSuggetPost(req.params.postId);
    console.log(loadPost);
    res.render('posts/xemchitiet', {
        title: loadPost[0].postName,
        loadCat: loadCat,
        loadPost:loadPost,
        loadSuggetPost: loadSuggetPost,
        
    })
})

module.exports = router;