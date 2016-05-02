define(['./app'], function (app) {
    // Declare app level module which depends on views, and components
    app.config(['$routeProvider', '$sceProvider', function ($routeProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $routeProvider.otherwise({redirectTo: '/Error'});
        $routeProvider.when('/', {
            templateUrl: 'view/index.html',
            controller: "",
            resolve: {
                message: function () {
                    window.location.href = "index.html#/Index";
                }
            }
        });
        $routeProvider.when('/Error',{
            templateUrl: 'view/404.html',
            controller: ''
        }),
        $routeProvider.when('/Index', {
            templateUrl: 'view/index.html',
            controller: 'vipList'
        });
    }]);
});