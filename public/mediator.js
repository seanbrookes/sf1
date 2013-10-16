/**
 * Created with JetBrains WebStorm.
 * User: seanbrookes
 * Date: 2013-10-08
 * Time: 8:20 AM
 *
 */
define(['sf1','eventbus'],function(sf1, EventBus){

  var mediator = {
    'mediator.announce.success':function(obj){
      require(['toast'],function(mod){
        $().toastmessage('showSuccessToast', obj.msg);

      });
    }
  };

  function fire(command,options){

    if (mediator[command]){
      mediator[command](options);
    }
  }

  return {
    fire:fire
  }


});