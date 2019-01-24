app.controller('login', function ($scope, userservices ,$state) {

    /**
     * Define a login() function to handle a login request
     */
    $scope.login = function () {

    //store login data in a data object 
        var data = {
            userName: $scope.userName,
            Password: $scope.Password
        }
        console.log(data);

        userservices.loginUser(data).then(
            //execute in case of a successfull response
            function successCallback(response) {
                console.log("login successful ");
                console.log(response.data);
                // $window.location.href = 'http://127.0.0.1:46267/home.html';
                $state.go("home");
            },
            //execute in case of unsucessfull response
            function errorCallback(response) {
                console.log("login unsuccessful ");
                //$window.location.href = 'http://127.0.0.1:46267/home.html';
                console.log(response.data);
                //location.replace()

                
            }
        );

        }
    });