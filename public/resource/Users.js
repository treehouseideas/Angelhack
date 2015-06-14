//myApp.factory('Users', function($resource){
//    var UserResource = $resource('/api/:email/:firstname/:lastname/', {email : , firstname: , lastname: });
//    UserResource.prototype.isAdmin = function(){
//        return this.roles && this.roles.indexOf('admin') >-1;
//    };
//    return UserResource;
//});