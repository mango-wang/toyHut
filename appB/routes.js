define(['./app'], function (app) {
    // Declare app level module which depends on views, and components
    app.config(['$routeProvider', '$sceProvider', function ($routeProvider, $sceProvider) {
        $sceProvider.enabled(false);
        $routeProvider.otherwise({redirectTo: '/Error'});
        $routeProvider.when('/', {
            templateUrl: 'views/Contacts/ContactList.html',
            controller: "contactList",
            resolve: {
                message: function () {
                    window.location.href = "index.html#/Contact/List";
                }
            }
        });
        $routeProvider.when('/Index/Default', {
            templateUrl: 'views/Index/Default.html',
            controller: 'default'
        });
    }]);
});