myApp.factory('UserService', function($http, $location) {
    var apiKey = "8bea781f-3916-467d-a48f-c26e56627cb4";
    var toke = {};
    return {
        createUser : function(email, password) {
            var apiAddUser = "https://api.idolondemand.com/1/api/sync/adduser/v1";
            $http.post(apiAddUser, {
                'store': 'users',
                'email': email,
                'password': password,
                'apikey': apiKey
            }).
                success(function(message) {
                    console.log(message);
                    console.log("User created successfully!");
                    return message;
                }).
                error(function(error) {
                    console.log(error);
                    console.log("Failed to create user :(");
                    return error;
                });
        },
        authUser : function(email, password) {
            var apiAuthUser = "https://api.idolondemand.com/1/api/sync/authenticate/v1";
            $http.post(apiAuthUser, {
                'mechanism': 'SIMPLE',
                'store': 'users',
                'user': email,
                'password': password,
                'apikey': apiKey
            }).
                success(function (message) {
                    console.log(message.token);
                    toke = message.token;
                }).
                error(function(message) {
                    console.log(message);
                    return messsage;
                });
        },
        verifyUser : function(token) {
            var apiVerify = "https://api.idolondemand.com/1/api/sync/verify/v1?token=";
            $http.get(apiVerify + token + apiKey).
                success(function(message) {
                    console.log(message);
                }).
                error(function(message) {
                    console.log(message);
                    $location.path('/partials/signup');
                });
        },
        listUsers: function() {
            var apiListUser = "https://api.idolondemand.com/1/api/sync/listusers/v1?store=users&apikey=8bea781f-3916-467d-a48f-c26e56627cb4";
            $http.get(apiListUser).
                success(function(data) {
                    return data['users'];
                });
        }
    };
});
