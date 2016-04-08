define(['angular'], function (angular) {
    'use strict';
    return angular.module('sbase', []).
        factory('sBaseService', ["$location", function ($location) {
            $.cookie.json = true;
            var isSessionValid = true,
                isLocal = window.location.href.indexOf('smarket.net.cn') <= -1,
                nodeId = $location.absUrl().match(new RegExp("[\?\&#]nodeId=([^\&#]*)(\&?)", "i"));

            function getTenantId() {
                var tenantId = $.cookie('tenantId');
                var reg = /"?\d+-\d+-(\d+)"?/;
                if (tenantId && tenantId.match && tenantId.match(reg)) {
                    tenantId = tenantId.match(reg)[1] * 1;
                }
                return tenantId || "";
            }

            return {
                sbaseUrl: window.config.sbaseUrl,
                adminbUrl: window.config.adminbUrl,
                tenantUrl: window.config.tenantUrl,
                dst: "01-0401-00000001",
                orn: "02-0001-00000001",
                ver: 1000,
                getTenantId: function () {
                    return getTenantId();
                },
                transform: function (data) {
                    var tenantId = getTenantId();
                    if (nodeId) {
                        tenantId = nodeId[1];
                    }
                    data["command"]["body"] = angular.extend(data["command"]["body"], {
                        tenantId: tenantId,
                        nodeId: tenantId
                    });
                    return $.param(data);
                },
                transformNoTenant: function (data) {
                    return $.param(data);
                },
                setUserInfo: function (userInfo) {
                    // 这个方法，用来存cookie，并且判断是否记住我。
                    if (userInfo["isKeep"]) {
                        $.cookie("userInfo", userInfo, {
                            expires: 30,
                            domain: isLocal ? "" : "smarket.net.cn",
                            path: '/'
                        });
                    } else {
                        $.cookie("userInfo", userInfo, {
                            domain: isLocal ? "" : "smarket.net.cn",
                            path: '/'
                        });
                    }
                },
                getUserInfo: function () {
                    return $.cookie("userInfo");
                },
                getUserSessionId: function () {
                    var userInfo = $.cookie("userInfo");
                    return userInfo && userInfo.hasOwnProperty("sessionId") ? userInfo.sessionId : "";
                },
                clearUserSessionId: function () {
                    localStorage.clear();
                    $.cookie("userInfo", null, {
                        domain: isLocal ? "" : "smarket.net.cn",
                        path: '/'
                    });
                },
                sessionExpire: function (forceExpire) {
                    if (isSessionValid) {
                        isSessionValid = false;
                        this.clearUserSessionId();
                        window.location.href = isLocal ? "Login.html#/Login" : window.config.tenantUrl + "login.html#/Login?jumpUrl=" + encodeURIComponent(window.location.href);
                    }
                }
            };
        }]);
});