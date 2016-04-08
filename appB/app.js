'use strict';
define([
    'angular',
    'angularRoute',
    'angularCookies',
    'angularAnimate',
    'angularResource',
    'angularSanitize',
    'angularMd5',
    'angularUpload',
    'angularUploadShim',
    'angularDateRangePicker',
    'angularSwitch',
    'angularCalendar',
    'angularDateTimePicker',
    'angularQrCode',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index',
    './services/SBaseService'
], function (angular) {
    // Declare app level module which depends on views, and components
    return angular.module('toyHut', [
        'ngRoute',
        'ngCookies',
        'ngAnimate',
        'ngResource',
        'ngSanitize',
        'ngMd5',
        'ngFileUpload',
        'monospaced.qrcode',
        'daterangepicker',
        'frapontillo.bootstrap-switch',
        'ui.bootstrap.datetimepicker',
        'ui.calendar',
        'controllers',
        'directives',
        'filters',
        'services',
        'sbase'
    ]).run(function () {
        //window.Ps = require('perfectScrollbar');
        //require('perfectScrollbarJquery');
    });
});
