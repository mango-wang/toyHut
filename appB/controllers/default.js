'use strict';
define([
    './controllers'], function (controllers) {
    controllers.
    controller('default', [
        '$rootScope',
        '$scope',
        '$route',
        '$timeout',
        function ($rootScope, $scope, $route,  $timeout) {
            $rootScope.pageTitle = "标签设置";

            $timeout(function () {
            }, 500);

        }])
});
