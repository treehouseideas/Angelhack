myApp.factory('Users', function($resource){
    return $resource('/api/:id', {id: "johnnny bravo"});
});