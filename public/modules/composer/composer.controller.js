/**
 * Greenfinger
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:57 PM
 *
 */
define(['sf1','uiform','modules/composer/composer.models','modules/composer/composer.views','text!modules/composer/composer.templates.html'],
    function(sf1, Form, Model, View, template){
        var anchorSelector = '#TemplateContainer';

        _.templateSettings.variable = 'G';
        _.templateSettings.variable = 'S';
        var baseMarkup = $(template);
        // attach the module template markup to the DOM
        $(anchorSelector).append(baseMarkup);

        var indexView = function(){
            var targetLayoutView = new View.IndexLayout();
            targetLayoutView.render();


            var targetView = new Form.UIForm();
            var textField = new Form.UIFormText();
            var codeButton = new Form.UIButton({
                model:new Form.UIButtonModel({text:'Code Button'}),
                attributes:{class:'btn-post-code'}
//                postCodeFromComposer:function(){
//                    sf1.log('|| - Post Code Button Clicked Event ');
//                },
//                events:{
//                    'click .btn-post-code':'postCodeFromComposer'
//                }

            });
           // targetLayoutView.container.show(targetView);

            var indexContainerRegion = new Backbone.Marionette.Region({
                el: '.view-index'
            });

            targetLayoutView.on('show',function(layout){
                indexContainerRegion.show(codeButton);
                var formRegion = new Backbone.Marionette.Region({
                    el: '.ui-form'
                });
                formRegion.show(textField);
                var editor = ace.edit("editor");
                editor.setTheme("ace/theme/monokai");
                editor.getSession().setMode("ace/mode/javascript");
            });
            //targetLayoutView.container.show(targetView);

            return targetLayoutView;
        };

        return{
            MainView:indexView
        };
    }
);