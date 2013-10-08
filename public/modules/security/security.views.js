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


    var indexView = Backbone.Marionette.CompositeView.extend({
        template: '#SecurityIndexTemplate'

      }
    );
    var signUpView = Backbone.Marionette.ItemView.extend({
        template: '#SignUpTemplate',
        onShow: function (event) {


          // signup form submit
          // should be an embedded event on the view
          $('.btn-signup').click(function (event) {
            event.preventDefault();
            sf1.logger.info('sumbit sign up form');
            var signUpRequestModel = {};
            // signUpRequestModel.userName = $('.form-signup #UserName').val();
            signUpRequestModel.email = $('[data-el-name="signUpForm"] #Email').val();
            signUpRequestModel.password = $('[data-el-name="signUpForm"] #Password').val();
            sf1.logger.info('signUpRequestModel populated: ' + JSON.stringify(signUpRequestModel));
            $.ajax({
              type: 'POST',
              url: '/user',
              data: signUpRequestModel,
              success: function (response) {
                sf1.logger.info('success sign up');
                sf1.logger.info(response);
                sf1.logger.info(JSON.stringify(response));
              },
              error: function (response) {
                sf1.logger.info('error sign up');
                sf1.logger.info(response);
                sf1.logger.info(JSON.stringify(response));
              }

            });

          });
        }
      }
    );
    var loginView = Backbone.Marionette.ItemView.extend({
        template: '#LoginFormTemplate',
        onShow: function (event) {
          var loginButton = $('.btn-login');


          /*
           *
           * login submit button (not main navigation  that is class:cmd-auth)
           *
           * */
          loginButton.click(function (event) {
            event.preventDefault();
            sf1.logger.info('sumbit login form');
            var loginRequestModel = {};
            loginRequestModel.email = $('[data-el-name="loginForm"] #Email').val();
            loginRequestModel.password = $('[data-el-name="loginForm"]  #Password').val();
            $.ajax({
              type: 'POST',
              url: '/auth',
              data: loginRequestModel,
              success: function (response) {
                /*
                 * login may not have been successfull just becaus the ajax request succeeded.
                 *
                 * make sure the use is authenticated
                 * */
                sf1.logger.info(JSON.stringify(response));
                if (response.isAuthenticated) {
                  document.location.href = '/';
                }
              },
              error: function (response) {
                sf1.logger.info('error login');
                sf1.logger.info(response);
                sf1.logger.info(JSON.stringify(response));
              }

            });
          });
        }

      }
    );


    var indexDefaultLayout = Backbone.Marionette.Layout.extend({
      template: '#SecurityIndexLayoutTemplate',
      regions: {
        container: '.view-index'
      }
    });
    return {
      IndexView: indexView,
      IndexLayout: indexDefaultLayout,
      SignUp: signUpView,
      Login: loginView

    };


  }
);