myApp.controller('signinCtrl', function($scope, UserService){
    $scope.username = 'Angel Hacker';
    $scope.loggedin = false;
    $scope.signin = function() {
        UserService.authUser($scope.email, $scope.password);
        $scope.loggedin = true;
    };
    $scope.signup = function() {
        UserService.createUser($scope.email,$scope.password);
        $scope.loggedin = true;

    };
});