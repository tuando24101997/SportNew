module.exports = function(app){
    app.use('/', require('../routes/index.route'));
    app.use('/account', require('../routes/account.route'));
    app.use('/post', require('../routes/post.route'));
    app.use('/find', require('../routes/find.route'));
}