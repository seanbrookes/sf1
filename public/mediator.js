/**
 * Created with JetBrains WebStorm.
 * User: seanbrookes
 * Date: 2013-10-08
 * Time: 8:20 AM
 *
 */
define(['sf1','eventbus'],function(sf1, EventBus){

  var mediator = {
    toast:function(){
      require(['toast'],function(mod){
        $().toastmessage('showSuccessToast', "heck ya created");
        sf1.logger.info('Hell Ya');

      });
    }
  };

  function fire(command){

    if (mediator[command]){
      mediator[command]();
    }
  }

  return {
    fire:fire
  }


});