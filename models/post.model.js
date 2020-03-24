const db = require('../utils/db');

module.exports = {
    loadPost:(postId)=>db.load(`select * from posts where postId = ${postId}`),
}