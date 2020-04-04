const db = require('../utils/db');
const config = require('../config/default.json');

module.exports = {

    // load categories
    loadCat:()=>db.load(`select * from categories`),

    // load 9 hot new 
    loadHotNew:()=>db.load(`select * FROM posts ORDER BY postDate DESC LIMIT 9`),

    loadNewFirst:()=>db.load(`SELECT * FROM posts WHERE postDate=(SELECT MAX(postDate) FROM posts)`),

    loadNewSecond: ()=>db.load(`SELECT * FROM posts WHERE postDate NOT IN (SELECT MAX(postDate) FROM posts ) limit 6`),

    loadHot: ()=>db.load(`select * FROM posts  ORDER BY RAND()  LIMIT 8`),

    loadSeriaFirst:()=>db.load(`SELECT * FROM posts WHERE postDate=(SELECT MAX(postDate) FROM posts where catId = 5) AND catId=5`), 
      
    loadSeriaSecond:()=>db.load(`SELECT * FROM posts WHERE postDate NOT IN (SELECT MAX(postDate) FROM posts where catId = 5) and catId=5 order by postDate desc limit 4`),

    /* PHÂN TRANG */
    PageForCat:(CatID, offset )=> db.load(`select * from posts where catId = ${CatID} limit ${config.page.limit} offset ${offset}`),

    CountByCat:(CatId)=> db.load(`select count(*) as total from posts where catId = ${CatId}`),

    CatForId:(CatId)=> db.load(`select * from categories  where catId = ${CatId}`),
}