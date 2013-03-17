/**
 * Created with JetBrains WebStorm.
 * User: sean
 * Date: 14/03/13
 * Time: 11:14 PM
 * To change this template use File | Settings | File Templates.
 */
var config = {
    app: {
        friendlyName: 'Simple Framework One',
            name:'sf1'
    },
    db: {
        db: 'sf1',
        host: 'localhost',
        port: 27017,  // optional, default: 27017
        collection: 'sessions', // optional, default: sessions
        options:{
            db: {
                safe: true
            }
        }
    },
    salt: '076ee61d63aa10a125ea872411e433bc',
    cookieSecretString: 'a secret string',
    localPort: 3002
};
module.exports = config;
