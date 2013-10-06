/**
 * sf1
 *
 * User: sean
 * Date: 05/05/13
 * Time: 11:53 PM
 *
 */
var config = {
  app: {
    friendlyName: 'sf1',
    name: 'sf1'
  },
  db: {
    db: 'sf1',
    host: 'localhost',
    port: 27017,  // optional, default: 27017
    collection: 'sessions', // optional, default: sessions
    options: {
      db: {
        safe: true
      }
    }
  },
  salt: '076ee61d63aadedwa99ea872411e433bc',
  cookieSecretString: 'a secret string',
  localPort: 3005
};
module.exports = config;
