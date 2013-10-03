/**
 * Created with JetBrains WebStorm.
 * User: sean
 * Date: 16/03/13
 * Time: 8:48 AM
 * To change this template use File | Settings | File Templates.
 */
var UserModel = require('./../models/user-model');
var user = require('./user');
var admin = require('./admin');

module.exports = function(app){

    /*
     *
     * ROUTES
     *
     * */
    app.get('/logout',user.logout);
    app.get('/isauth',user.isUserAuth);
    app.post('/auth',user.postAuthenticate);
    app.post('/user',user.createUser);
    app.get('/pendingaccounts',admin.getPendingAccountList);


 }
