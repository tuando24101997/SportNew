const postModel = require('../models/post.model');
const express = require('express');
const router = express.Router();


router.get('/:postId', async(req, res)=>{
    const loadPost = await postModel.loadPost(req.params.postId);
    console.log(loadPost);
    res.render('posts/xemchitiet', {
        loadPost:loadPost,
    })
})

module.exports = router;