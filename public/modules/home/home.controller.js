/**
 * sf1
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:57 PM
 *
 */
define(['sf1', 'mediator', 'modules/home/home.models', 'modules/home/home.views', 'text!modules/home/home.templates.html'],
  function (sf1, Mediator, Model, View, template) {
    var anchorSelector = '#TemplateContainer';

    _.templateSettings.variable = 'S';
    var baseMarkup = $(template);
    // attach the module template markup to the DOM
    $(anchorSelector).append(baseMarkup);

    var indexView = function () {
      var homeLayoutView = new View.HomeLayout();

      var homeView = new View.helloWorldView();


      homeLayoutView.on('show', function () {
        homeLayoutView.homeContentRegion.show(homeView);
      });

      return homeLayoutView;
    };

    return{
      IndexView: indexView
    };
  }
);