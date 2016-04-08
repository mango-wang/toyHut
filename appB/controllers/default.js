'use strict';
define([
    './controllers'], function (controllers) {
    controllers.
    controller('default', [
        '$rootScope',
        '$scope',
        '$route',
        'settingService',
        '$timeout',
        function ($rootScope, $scope, $route, settingService, $timeout) {
            $rootScope.pageTitle = "标签设置";

            $timeout(function () {
            }, 500);

        }])
});
