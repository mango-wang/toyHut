
require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularRoute: 'bower_components/angular-route/angular-route',
        angularCookies: 'bower_components/angular-cookies/angular-cookies',
        angularAnimate: 'bower_components/angular-animate/angular-animate',
        angularAria: 'bower_components/angular-aria/angular-aria',
        angularResource: 'bower_components/angular-resource/angular-resource',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        angularSanitize: 'bower_components/angular-sanitize/angular-sanitize',
        angularMd5: 'bower_components/angular-md5/angular-md5',
        angularUpload: 'bower_components/ng-file-upload/ng-file-upload',
        angularUploadShim: 'bower_components/ng-file-upload/ng-file-upload-shim',
        jquery: 'bower_components/jquery/jquery',
        jqueryCookie: 'bower_components/jquery.cookie/jquery.cookie',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
        ueditor: 'bower_components/ueditor/ueditor.all',
        ueditorConfig: 'bower_components/ueditor/ueditor.config',
        ueditorzh: 'bower_components/ueditor/lang/zh-cn/zh-cn',
        angularUEditor: 'bower_components/angular-ueditor/dist/angular-ueditor',
        angularDateRangePicker: 'bower_components/angular-daterangepicker/js/angular-daterangepicker',
        dateRangePicker: 'bower_components/bootstrap-daterangepicker/daterangepicker',
        moment: 'bower_components/moment/moment',
        momentCN: 'bower_components/moment/locale/zh-cn',
        zeroClipboard: 'bower_components/zeroclipboard/dist/ZeroClipboard',
        bootstrapSwitch: 'bower_components/bootstrap-switch/dist/js/bootstrap-switch',
        angularSwitch: 'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch',
        codeMirror: 'bower_components/ueditor/third-party/codemirror/codemirror',
        calendar: 'bower_components/fullcalendar/dist/fullcalendar',
        gcal: 'bower_components/fullcalendar/dist/gcal',
        angularCalendar: 'bower_components/angular-ui-calendar/src/calendar',
        angularDateTimePicker: 'bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker',
        angularQrCode: 'bower_components/angular-qrcode/angular-qrcode',
        qrcodeGenerator: 'bower_components/qrcode-generator/js/qrcode',
        uaParser: 'bower_components/ua-parser-js/src/ua-parser'
    },
    shim: {
        'angular': {deps: ["jquery"], 'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularCookies': ['angular'],
        'angularAnimate': ['angular'],
        'angularAria': ['angular'],
        'angularResource': ['angular'],
        'angularSanitize': ['angular'],
        'angularMd5': ['angular'],
        'angularUpload': ['angular'],
        'angularUploadShim': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'ueditor': {
            deps: ['jquery', 'ueditorConfig'],
            'exports': 'UE'
        },
        'ueditorzh': {
            deps: ['ueditor']
        },
        'angularUEditor': {
            deps: ['ueditorzh', 'angular']
        },
        'angularDateRangePicker': {
            deps: ['moment', 'angular', 'jquery', 'dateRangePicker', 'momentCN']
        },
        'momentCN': {
            deps: ['moment']
        },
        'angularSwitch': {
            deps: ['angular', 'bootstrapSwitch']
        },
        'bootstrapSwitch': {
            deps: ['jquery']
        },
        'codeMirror': {
            'exports': 'CodeMirror'
        },
        'jqueryCookie': {
            deps: ['jquery']
        },
        'calendar': {
            deps: ['jquery', 'moment']
        },
        'angularCalendar': {
            deps: ['angular', 'calendar', 'jquery', 'moment']
        },
        'angularDateTimePicker': {
            deps: ['angular', 'moment', 'bootstrap']
        },
        'angularQrCode': {
            deps: ['angular', 'qrcodeGenerator']
        },
        'uaParser': {
            deps: ['jquery']
        }
    },
    packages: [
        {
            name: 'echarts',
            location: 'bower_components/echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: 'bower_components/zrender/src', // zrender与echarts在同一级目录
            main: 'zrender'
        }
    ],
    priority: [
        "angular"
    ],
    deps: [],
    callback: null,
    timeOut: 1,
    urlArgs: "v=0.1",
    baseUrl: './'
});

require([
    'angular',
    'jquery',
    'jqueryCookie',
    'routes',
    'bootstrap'
], function (angular) {
    angular.element().ready(function () {
        // bootstrap the app manually
        angular.bootstrap(document, ['toyHut']);
    });
});