/**
 * Greenfinger
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1','marionette'],
    function(sf1, Marionette){


        var indexView = Backbone.Marionette.CompositeView.extend({
                template:'#IAIndexTemplate'

            }
        );
        var mainNavView = Backbone.Marionette.ItemView.extend({
            template:'#IAMainNavTemplate'
        })
        var navItemView = Backbone.Marionette.ItemView.extend({
           template:'#NavItemTemplate'
        });

        /*
         * GlobalNavView
         *
         * */
        var globalNavView = Backbone.Marionette.CollectionView.extend({
            template:'#IAGlobalNavTemplate',
            tagName: 'ul',
            className: 'nav-global-list',
            itemView:navItemView
        });


        var indexDefaultLayout = Backbone.Marionette.Layout.extend({
            template:'#IAIndexLayoutTemplate',
            regions:{
                container:'.view-index'
            }
        });
        return {
            IndexView:indexView,
            IndexLayout:indexDefaultLayout,
            MainNavView:mainNavView,
            GlobalNav:globalNavView

        };



    }
);