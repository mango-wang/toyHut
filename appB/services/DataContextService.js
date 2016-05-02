define(['services/services'], function (services) {
    services.
    factory('daoService', [
        '$http',
        '$q',
        function ($http, $q) {
            function Context() {
            }

            var errMsg = {
                content: null,
                result: 500,
                desc: "内部服务器错误"
            };
            Context.prototype.exec = function (command, callback) {
                var cmd = {};
                angular.extend(cmd, command);
                $http({
                    method: 'post',
                    url: window.config.apiUrl,
                    data: cmd,
                    transformRequest: function (data) {
                        return $.param(data);
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if (data["body"] && data["body"]["result"] == 0) {
                        if (typeof callback === "function") {
                            callback(data["body"]);
                        }
                    } else {
                        if (typeof callback === "function") {
                            callback(data);
                        }
                    }
                }).error(function (data, status) {
                    if (status == 401) {
                        //sBaseService.sessionExpire();
                    }
                    if (status == 500) {
                        callback(errMsg)
                    }
                });
            };
            Context.prototype.execPromise = function (command) {
                var deferred = $q.defer();
                var cmd = {
                    size: 0,
                    orn: '',
                    dst: '',
                    type: 0x0002,
                    cmd: '',
                    sess: '',
                    seq: 0,
                    ver: 1000,
                    body: ''
                };
                angular.extend(cmd, command);
                $http({
                    method: 'post',
                    url: '',
                    data: {
                        command: command
                    },

                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).success(function (data) {
                    if (data["body"] && data["body"]["result"] == 0) {
                        if (typeof callback === "function") {
                            deferred.resolve(data["body"]);
                        }
                    } else {
                        if (typeof callback === "function") {
                            deferred.reject(data);
                        }
                    }
                }).error(function (data, status) {
                    if (status == 401) {
                        //sBaseService.sessionExpire();
                    }
                    if (status == 500) {
                        deferred.reject(status);
                    }
                });
                return deferred.promise;
            };
            return {
                dataContext: Context
            };
        }
    ]);
});