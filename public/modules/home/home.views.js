/**
 * sf1
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1', 'marionette'],
  function (sf1, Marionette) {

    var helloWorldView = Backbone.Marionette.ItemView.extend({
        template: '#IndexTemplate'
      }
    );
    var homeDefaultLayout = Backbone.Marionette.Layout.extend({
      template: '#HomeLayoutTemplate',
      regions: {
        homeContentRegion: '[data-region="homeContentRegion"]'
      }
    });
    return {
      helloWorldView: helloWorldView,
      HomeLayout: homeDefaultLayout
    };
  }
);