/**
 * Simple Framework One

 * User: sean
 * Date: 05/01/13
 * Time: 9:31 AM
 *
 *
 *
 */
require.config({
    enforceDefine: true,
    paths: {
        'jquery'        : 'scripts/lib/jquery-1.8.2.min',
        'cookie'        : 'scripts/lib/plugins/jquery.cookie',
        'tabs'          : 'scripts/lib/plugins/kube.tabs',
        'rtelib'        : 'scripts/lib/plugins/markitup/jquery.markitup',
        'rteconfig'        : 'scripts/lib/plugins/markitup/sets/default/set',
        'prettydate'    : 'scripts/lib/plugins/jquery.prettydate',
        'contextmenu'   : 'scripts/lib/plugins/jquery.contextmenu',
        'underscore'    : 'scripts/lib/underscore',
        'json2'         : 'scripts/lib/json2',
        'i18n'          : 'scripts/lib/i18next.amd-1.6.0',
        'backbone'      : 'scripts/lib/backbone',
        'marionette'    : 'scripts/lib/backbone.marionette',
        'bootstrap'     : 'bootstrap/js/bootstrap',
        'client'        : 'client.app',
        'app'           : 'modules/app/app.controller',
        'sf1'           : 'scripts/sf1.0.4',
        'security'      : 'modules/security/security.controller',
        'admin'         : 'modules/admin/admin.controller',
        'post'          : 'modules/post/post.controller',
        'index'         : 'modules/index/index-module',
        'home'          : 'modules/home/home.controller',
        'io'            : 'modules/io/io-module',
        'ui'            : 'modules/ui/ui-module',
        'uirte'         : 'modules/ui/ui.rte.controller',
        'uiform'        : 'modules/ui/ui.form.controller',
        'ia'            : 'modules/ia/ia.controller',
        'router'        : 'router',
        'ca'            : 'client.app',
        'eventbus'      : 'eventbus',
        'raphael'       : 'scripts/lib/raphael-min',
        'd3'            : 'scripts/lib/d3.v3.min',
        'morris'        : 'scripts/lib/morris.min',
        'composer'      : 'modules/composer/composer.controller',
        'user'          : 'modules/user/user.controller',
        'modal'         : 'scripts/lib/plugins/jquery.simplemodal-1.4.4',
        'chai'          : '/tests/libs/chai'





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
            deps: ['jquery']
        },
        contextmenu: {
            deps: ['jquery']
        },
        cookie: {
            deps: ['jquery']
        },
        raphael:{
            deps: ['jquery'],
            exports: 'Raphael'
        },
        morris: {
            deps: ['jquery','raphael'],
            exports: 'Morris'
        },
        d3: {
            exports: 'd3'
        }
    }
});
define(
    ['jquery', 'sf1', 'i18n', 'client'],
        function($, sf1, i18n, App) {

            i18n.init({
                lng: 'en'
            },
            function() {  // init rosters (app context models)

                /*
                 *
                 * conceptually there should be a configuration to feed the initialization sequence
                 * to know when all of the initialization steps are complete
                 * that may be what the
                 *
                 *
                 * */
                sf1.EventBus.trigger('app.contextInitSuccess');
            }
        );

    }
);