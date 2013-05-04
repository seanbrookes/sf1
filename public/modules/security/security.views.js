/**
 * sf1
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:58 PM
 *
 */
define(['sf1','marionette'],
    function(sf1, Marionette){


        var indexView = Backbone.Marionette.CompositeView.extend({
                template:'#SecurityIndexTemplate'

            }
        );
        var signUpView = Backbone.Marionette.ItemView.extend({
                template:'#SignUpTemplate'

            }
        );
        var loginView = Backbone.Marionette.ItemView.extend({
                template:'#LoginFormTemplate'

            }
        );



        var indexDefaultLayout = Backbone.Marionette.Layout.extend({
            template:'#SecurityIndexLayoutTemplate',
            regions:{
                container:'.view-index'
            }
        });
        return {
            IndexView:indexView,
            IndexLayout:indexDefaultLayout,
            SignUp:signUpView,
            Login:loginView

        };



    }
);