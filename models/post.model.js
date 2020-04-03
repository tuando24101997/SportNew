const db = require('../utils/db');

module.exports = {
    loadPost:(postId)=>db.load(`select * from posts where postId = ${postId}`),
    loadSuggetPost:(postId)=>db.load(`select * from posts where catId=(select catId from posts where postId = ${postId}) and postId != ${postId} order by postDate desc limit 4`),
}