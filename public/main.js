/**
 * Simple Framework One

 * User: sean
 * Date: 05/01/13
 * Time: 9:31 AM
 *
 */
/**
 *
 * Baseline - make sure object is supported
 *
 *
 *
 * Twitter and Google+ to instantly connect to what's most important to me, as well as follow my friends, experts, and favorite celebs.
 LinkedIn to manage my professional identity and engage with my professional network.
 Vizify to provide a quick way for new followers to visualize my Bio.
 YouTube to categorize, store and share my professional videos.
 Instagram to share snapshots from my global business ventures...
 Newsle to track articles about my friends, colleagues or anyone else I care about.
 Klout to manage my social media reach
 */
//requirejs.config({
//	baseUrl: 'scripts',
//
//	paths: {
//	},
//
//	shim: {
//		'lib/underscore-min': {
//			exports: '_'
//		},
//		'lib/backbone-min': {
//			deps: ['lib/underscore-min']
//			, exports: 'Backbone'
//		},
//		'app': {
//			deps: ['lib/underscore-min', 'lib/backbone-min']
//		}
//	}
//});
//
//require([
//	'app'
//],
//
//	function(App) {
//		window.bTask = new App();
//	});
require.config({
    enforceDefine: true,
    paths: {
        'jquery'        : 'scripts/lib/jquery-1.8.2.min',
        'cookie'        : 'scripts/lib/plugins/jquery.cookie',
        'prettydate'    : 'scripts/lib/plugins/jquery.prettydate.js',
        'underscore'    : 'scripts/lib/underscore',
        //'text'          : 'scripts/lib/text',
        'json2'         : 'scripts/lib/json2',
        'i18n'          : 'scripts/lib/i18next.amd-1.6.0',
        'backbone'      : 'scripts/lib/backbone',
        'marionette'    : 'scripts/lib/backbone.marionette',
        'bootstrap'     : 'bootstrap/js/bootstrap',
        'client'        : 'scripts/client-app',
        'sf1'           : 'scripts/sf1.0.1',
        'security'      : 'modules/security/security-module',
        'admin'         : 'modules/admin/admin-module',
        'index'         : 'modules/index/index-module',
        'io'            : 'modules/io/io-module',
        'ui'            : 'modules/ui/ui-module',
        'ia'            : 'modules/ia/ia-module'
    },
    shim: {

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette : {
            deps : ['backbone','underscore','jquery'],
            exports : 'Marionette'
        },
        underscore: {
            exports: '_'
        },
        i18n: {
            deps: ['jquery'],
            exports: 'i18n'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        sf1: {
            deps: ['jquery'],
            exports: 'sf1'
        },
        prettydate: {
            deps: ['jquery'],
            exports: 'prettydate'
        },
        cookie: {
            deps: ['jquery'],
            exports: 'cookie'
        }
    }
});
define(
    ['jquery','i18n', 'client', 'security', 'ia'],
    function($, i18n, App, Security, IA) {

        App.sf1.log('typeof $: ' + typeof $);
        App.sf1.log('typeof _: ' + typeof _);
        App.sf1.log('typeof backbone: ' + typeof Backbone);


        i18n.init({
            lng: 'en'
        }, function(t) {
            var router = new App.AppRouter(t);
            Backbone.history.start();


            SF1 = new Backbone.Marionette.Application();
            SF1.addRegions({
                mainContentRegion: '.main-content-wrapper',
                pageHeaderRegion:'.page-header',
                pageFooterRegion:'.page-footer',
                mainNavRegion:'#MainNavigation',
                globalNavRegion:'#GlbalNavigation'

            });
            IA.init();




        });

    }
);