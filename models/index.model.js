const db = require('../utils/db');

module.exports = {
    loadCat:()=>db.load(`select * from categories`),
    loadHotNew:()=>db.load(`select * FROM posts ORDER BY postDate DESC LIMIT 9`),
    loadNewFirst:()=>db.load(`SELECT * FROM posts WHERE postDate=(SELECT MAX(postDate) FROM posts)`),
    loadNewSecond: ()=>db.load(`SELECT * FROM posts WHERE postDate NOT IN (SELECT MAX(postDate) FROM posts ) limit 6`),
    loadHot: ()=>db.load(`select * FROM posts  ORDER BY RAND()  LIMIT 8`),
    loadSeriaFirst:()=>db.load(`SELECT * FROM posts WHERE postDate=(SELECT MAX(postDate) FROM posts where catId = 5) AND catId=5`),   
    loadSeriaSecond:()=>db.load(`SELECT * FROM posts WHERE postDate NOT IN (SELECT MAX(postDate) FROM posts where catId = 5) and catId=5 order by postDate desc limit 4`),
}