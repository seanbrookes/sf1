/**
 * sf1
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1', 'marionette','mediator'],
  function (sf1, Marionette, Mediator) {

    var helloWorldView = Backbone.Marionette.ItemView.extend({
        template: '#IndexTemplate',
        onShow:function(){
          Mediator.fire('mediator.announce.success',{msg:'[Home View] Hello World'});
        }
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