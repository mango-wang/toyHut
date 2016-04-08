define(['./app'], function (app) {
    // Declare app level module which depends on views, and components
    app.config(['$routeProvider', '$sceProvider', function ($routeProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $routeProvider.otherwise({redirectTo: '/Error'});
        $routeProvider.when('/', {
            templateUrl: 'views/index.html',
            controller: "default",
            resolve: {
                message: function () {
                    window.location.href = "index.html#/Index";
                }
            }
        });
        $routeProvider.when('/Index', {
            templateUrl: 'views/index.html',
            controller: 'default'
        });
    }]);
});