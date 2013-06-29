/**
 * Created with JetBrains WebStorm.
 * User: sean
 * Date: 16/03/13
 * Time: 9:20 AM
 * To change this template use File | Settings | File Templates.
 */
var events = require('events');
var EE = require('events').EventEmitter;
var EventBus = new EE();
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: './logs/locale.log' })
    ]
});
exports.locale = function(req, res, next) {
    logger.info('--------------   Start locale processing ---------');
//    EventBus.on('createUser',function(obj){
//        logger.info('Create User Event handler called - app.js - locale test request intercept');
//    });
    /*

     make sure the locale is set
     check if there is a user preference set for locale
     if there is make sure the session is set to it
     if there is no user preference and no session value set
     then set it based on the accept-language value from the header

     */
    var locales = req.headers["accept-language"];

    var sessionLocale = 'en';
    logger.info('Default locale: ' + sessionLocale);
    var localeArray = locales.split(',');

    for (var i = 0;i < localeArray.length;i++){
        // parse on semi colon to isolate value from 'quality'?
        var currentItem = localeArray[i];
        var tempArray = currentItem.split(';');
        var consoleOutput = '';
        if (tempArray.length > 1){
            for (var j = 0;j < tempArray.length;j++){
                consoleOutput += '[' + tempArray[j] + ']';
            }
        }
        else{
            consoleOutput = tempArray[0];
        }
        logger.info('accept-language item: ' + consoleOutput);
    }
    /*
     * there is no locale set for this session so we need
     * to check if the user is authenticated
     * this may be the first visit to the site
     * or may be a visit from an anonymous user
     *
     * */
    if (!req.session.userLocale){
        logger.info('No userLocale detected');
        if (req.session.isAuthenticated){
            /*
             * this is an authenticated user so we need to check if they have a user preference for locale
             *
             *
             * get user id from session
             *
             * query db for specific user preference for locale
             * if we find it set it
             *
             * if we don't find it then set to sessionLocale
             * */
            var currentUserId = req.session.userId;
            logger.info('Current session is authenticated id:' + currentUserId);
            // query mongo for user preference
            var userPreferenceName = 'userLocale';


            UserModel.findOne({_id:currentUserId},function(err,user){
                if (err){
                    logger.info('ERROR finding user in db for session locale preference');
                }
                if(user){
                    logger.info('We found the logged in user for preference');
                    /*
                     * check if user has a user preference set for the locale property
                     * */
                    if (((user.preferences)) && (user.preferences.locale)){
                        logger.info('THIS USER HAS A PREFERENCE FOR LOCALE');
                        req.session.userLocale = user.preferences.locale;
                    }
                    else{
                        // no persisted locale preference so set default
                        logger.info('the authenticated user has not yet set a preference for user locale')
                        req.session.userLocale = sessionLocale;
                    }
                }
                else{
                    logger.info('this should not happen but indicates there was no user and no error returned from findOne request');
                }
            });

            // user.preferences[userPreference]

        }
        else{
            // session is not authenticated - make sure the cookie is empty
            logger.info('req.session is not authenticated');
            res.cookie('isAuthenticated',false);
            res.cookie('userName',null);
            res.cookie('userId',null);
            /*
             *
             * set the default in the session
             *
             * emit set locale event
             *
             * */
            req.session.userLocale = sessionLocale;
        }
    }
    else{
        logger.info('We have a session.userLocale');
    }



    next();
}
