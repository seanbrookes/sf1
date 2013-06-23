/**
 * Seanica
 *
 * User: sean
 * Date: 08/06/13
 * Time: 10:13 PM
 *
 */
define(['sf1','marionette','rtelib'],
    function(sf1, Marionette){

        var rteView = Backbone.Marionette.CompositeView.extend({
                template:'#UIRTETemplate'
            }
        );

        return {
            RTEView:rteView
        };
    }
);