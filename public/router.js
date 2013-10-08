/**
 * Simple Framework One

 * User: sean
 * Date: 11/12/12
 * Time: 10:43 PM
 *
 */
// Router
define(['sf1','marionette','app'],
    function(sf1,Marionette,app){

      /*
       *
       *
       *   ROUTER
       *
       *
       * */
      var routerConfig = {
        index: function () {
          sf1.logger.info('index');
          sf1.EventBus.trigger('ia.mainNavEvent', [
            {route: 'index'}
          ]);
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'home',
            view:'IndexView'
          });
        },


        signup:function () {
          sf1.logger.info('signup route');
          sf1.EventBus.trigger('ia.mainNavEvent',{route:'signup'});
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'security',
            view:'SignUpView'
          });

        },

        login:function () {
          sf1.logger.info('login route');
          sf1.EventBus.trigger('ia.mainNavEvent',{route:'login'});
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'security',
            view:'LoginView'
          });

        },
        security:function(){
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'security',
            view:'IndexView'
          });
        },

        admin:function () {
          sf1.logger.info('admin route');

          /*
           *
           * Test to see if the module should be loaded
           * - is the current user authenticated
           * - if they are do they have permission to load the admin module
           *
           * need a central property mapped to event listeners on login / logout
           *
           * could test the cookie
           *
           * need to determine is this a framework issue or an application/security issue
           *
           * also maps to IA and other areas of the application.
           *
           * */
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'admin',
            view:'IndexView'

          });
        },
        user: function () {
          sf1.logger.info('user');
          sf1.EventBus.trigger('ia.mainNavEvent', [
            {route: 'user'}
          ]);
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'user',
            view:'IndexView'

          });

        },
        home: function () {
          sf1.logger.info('home');
          sf1.EventBus.trigger('ia.mainNavEvent', [
            {route: 'home'}
          ]);
          sf1.EventBus.trigger('ia.loadRegionContentRequest',{
            region:'appMainRegion',
            module:'home',
            view:'IndexView'

          });

        }
      };

        /*
         *
         * Initialize the AppRouter
         *
         *
         *  pass in a config object from app module
         * */
        var AppRouter = Backbone.Marionette.AppRouter.extend({
            appRoutes: {
                ""          : "index",
                "home"      : "index",
                "login"     : "login",
                "signup"    : "signup",
                "admin"     : "admin",
                "security"  : "security",
                "user"      : "user"
            },
            controller: routerConfig

        });
        return {
            AppRouter:AppRouter
        };
    }
);





