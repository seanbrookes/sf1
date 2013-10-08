/**
 * Greenfinger
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1', 'marionette'],
  function (sf1, Marionette) {


    var viewHelpers = {
      i18nLabel:function(key){
        return sf1.getI18nLabel(key);
      }
    };

    var indexView = Backbone.Marionette.CompositeView.extend({
        template: '#IAIndexTemplate'

      }
    );
    var mainNavView = Backbone.Marionette.ItemView.extend({
      template: '#IAMainNavTemplate',
      tagName: 'ul',
      className: 'nav nav-pills',
      templateHelpers:viewHelpers,
      onShow:function(){
        if(!sf1.isUserAuth()){
          $('[data-el-container="adminMenuItem"]').hide();
        }
      }
//      attributes:function(){
//        return {
//          role:'navigation'
//        }
//      }

    });
    var navItemView = Backbone.Marionette.ItemView.extend({
      template: '#NavItemTemplate',
      tagName: 'li'
    });

    /*
     * GlobalNavView
     *
     * */
    var globalNavView = Backbone.Marionette.ItemView.extend({
      template: '#IAGlobalNavTemplate',
      templateHelpers:viewHelpers,
      onShow: function (event) {
        //$('.global-nav-container').i18n();
        sf1.EventBus.trigger('ia.configureGreetingRequest');
      }
    });


    var indexDefaultLayout = Backbone.Marionette.Layout.extend({
      template: '#IAIndexLayoutTemplate',
      regions: {
        container: '.view-index'
      }
    });
    return {
      IndexView: indexView,
      IndexLayout: indexDefaultLayout,
      MainNavView: mainNavView,
      GlobalNav: globalNavView

    };


  }
);