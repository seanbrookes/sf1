/**
 * sf1
 *
 * User: sean
 * Date: 13/04/13
 * Time: 10:57 PM
 *
 */
define(['sf1','modules/admin/admin.models','modules/admin/admin.views','text!modules/admin/admin.templates.html'],
    function(sf1, Model, View, template){
        var anchorSelector = '#TemplateContainer';

        _.templateSettings.variable = 'S';
        var baseMarkup = $(template);
        // attach the module template markup to the DOM
        $(anchorSelector).append(baseMarkup);


// old file ocde
        function init(){
            sf1.log('Admin module init');
            var baseMarkup = $(markup);
            $(anchorSelector).html(baseMarkup);
            var adminModuleContainer = $('script#AdminModuleContainer').html();

            var template = _.template(adminModuleContainer);

            var templateData = {};

            var templateMarkup = template( templateData );
            $('.main-content-wrapper').html(templateMarkup);

            $('.btn-list-pending').click(function(event){
                sf1.log('list accounts');
                $.ajax({
                    type:'get',
                    url:'/pendingaccounts',
                    success:function(response){
                        sf1.log('success get pending accounts');
                        var outPutMarkup = '';
                        sf1.log(response);
                        if (response.length){
                            for (var i = 0;i < response.length;i++){
                                var user = response[i];
                                outPutMarkup += '<li><a href="#">' + user.userName  + '</a></li>';
                                //sf1.log('response[' + i +  '][' + JSON.stringify(response[i]) + ']');
                            }
                            $('.pending-account-list').html(outPutMarkup);
                        }

                    },
                    error:function(response){
                        sf1.log('error get pending accounts: ' + response);
                    }
                });
            });
        }









        var indexView = function(){
            var targetLayoutView = new View.IndexLayout();
            targetLayoutView.render();


            var targetView = new View.IndexView();
           // targetLayoutView.container.show(targetView);

            var indexContainerRegion = new Backbone.Marionette.Region({
                el: ".view-index"
            });

            targetLayoutView.on('show',function(layout){
                indexContainerRegion.show(targetView)
            });
            //targetLayoutView.container.show(targetView);

            return targetLayoutView;
        };

        return{
            IndexView:indexView
        };
    }
);