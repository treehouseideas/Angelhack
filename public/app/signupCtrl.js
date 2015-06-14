myApp.controller("signupCtrl", function($scope, notifier, $location, UserService){

    $scope.signup = function(){
        alert('working');
        UserService.createUser($scope.email,$scope.password)
    };

});