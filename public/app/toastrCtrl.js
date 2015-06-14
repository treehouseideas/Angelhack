myApp.value('toastr', toastr);
myApp.factory('notifier', function(toastr){
    return {
        notifysuccess: function(msg){
            toastr.success(msg);
            console.log(msg);
        },
        notifyerror: function(msg){
            toastr.error(msg);
            console.log(msg);
        }
}
});