/**
 * Greenfinger
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:57 PM
 *
 */
define(['sf1','modules/app/app.models','modules/app/app.views','text!modules/app/app.templates.html'],
    function(sf1,Model,View,template){

        var anchorSelector = '#TemplateContainer';


        _.templateSettings.variable = 'G';
        var baseMarkup = $(template);
        // attach the module template markup to the DOM
        $(anchorSelector).append(baseMarkup);

        sf1.app.addInitializer(function(options){

            // in case we want to override the default
            sf1.tplKey = 'S';
            // do useful stuff here
            var baseLayout = new View.BaseLayout();
            baseLayout.render();
            sf1.app.addRegions({
                appMainRegion: '.app-main',
                appHeaderRegion:'.app-header',
                appFooterRegion:'.app-footer',
                mainNavRegion:'.main-nav'
            });

            sf1.app.viewPort.show(baseLayout);

            // load Main Nav in the header
            sf1.EventBus.trigger('ia.loadRegionContentRequest',{
                region:'appHeaderRegion',
                module:'ia',
                view:'GlobalNavView'
            });
            sf1.EventBus.trigger('ia.loadRegionContentRequest',{
                region:'mainNavRegion',
                module:'ia',
                view:'MainNavView'
            });

        });


       // var xyp = baseLayout.appMainRegion;

        // this should be moved to a model on the app module
        var routerConfig = {
            index: function () {
                sf1.log('index');
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
                sf1.log('signup route');
                sf1.EventBus.trigger('ia.mainNavEvent',{route:'signup'});
                sf1.EventBus.trigger('ia.loadRegionContentRequest',{
                    region:'appMainRegion',
                    module:'security',
                    view:'SignUpView'
                });

            },

            login:function () {
                sf1.log('login route');
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
                sf1.log('admin route');

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
                sf1.log('user');
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
                sf1.log('home');
                sf1.EventBus.trigger('ia.mainNavEvent', [
                    {route: 'home'}
                ]);
                sf1.EventBus.trigger('ia.loadRegionContentRequest',{
                    region:'appMainRegion',
                    module:'home',
                    view:'IndexView'

                });

            },
            composer: function(){
                sf1.log('composer');
                sf1.EventBus.trigger('ia.mainNavEvent',[{route: 'composer'}]);
                sf1.EventBus.trigger('ia.loadRegionContentRequest',{
                    region:'appMainRegion',
                    module:'composer',
                    view:'MainView'
                });
            }
        };

        return {
            getRouterConfig:function(){
                return routerConfig;
            }
        };
    }
);