const db = require('../utils/db');

module.exports = {
    loadPost:(catId)=>db.load(`select * from posts where catId = ${catId}`),
}