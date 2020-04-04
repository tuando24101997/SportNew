const indexModel = require('../models/index.model');

module.exports = function(app) {
    app.use(async(req, res, next )=>{
        const rows = await indexModel.loadCat();
        res.locals.lcCategory = rows;

        next();
    })
}