/**
 * Created by mango on 2016/4/8.
 */
define(['services/services'], function (services) {
    'use strict';
    services.
    factory('vipService', [
        'daoService',
        function (daoService) {
            var dao = new daoService.dataContext();
            var command = {
                cmd: '',
                body: ''
            };
            return {
                getActionScore: function (info, callback) {
                    command.cmd = '';
                    command.body = info;
                    dao.exec(command, callback);
                },
                getList: function (info, callback) {
                    command.cmd = 'getList';
                    command.module = '01-0001-0002';
                    angular.extend(command,info);
                    dao.exec(command,callback);
                }
            };
        }
    ]);
});
