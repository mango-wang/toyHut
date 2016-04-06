/**
 * Created by mango on 2015/11/20.
 */
var redisClient = require("../common/Db");
var gerror = require("../../error");
module.exports = {
    login: function (paramData, callback) {
        var mobilePhone = paramData['body[mobilePhone]'];
        var password = paramData['body[password]'];
        redisClient.getRedisClient(callback, function (redisDb) {
            if (!(mobilePhone) || !(password)) {
                callback(gerror.getErrorJson(10005));
                return;
            }
            redisDb.getAsync('usr:' + mobilePhone).then(
                function (result) {
                    if (result) {
                        redisDb.hgetallAsync(result).then(
                            function (data) {
                                if (data.password == password) {
                                    callback(gerror.getSucessJson());
                                } else {
                                    callback(gerror.getErrorJson(10004));
                                }
                            }, function (error) {
                                callback(gerror.getErrorJson(10003));
                            })
                    } else {
                        callback(gerror.getErrorJson(10004));
                    }
                }, function (error) {
                    callback(gerror.getErrorJson(10003));
                })
        })


    },
    regist: function (paramData, callback) {

        //数据验证
        var mobilePhone = paramData['body[mobilePhone]'];
        var password = paramData['body[password]'];
        var cookie = paramData['body[cookie]'];
        if (!(mobilePhone) || !(password)) {
            callback(gerror.getErrorJson(10005));
            return;
        }
        if (password.length > 28) {
            callback(gerror.getErrorJson(10006));
        }
        if (!(cookie)) {
            callback(gerror.getErrorJson(10000));
        }

        redisClient.getRedisClient(callback, function (redisDb) {

            var key = redisClient.key["1"];
            redisDb.getAsync('usr:' + mobilePhone).then(function (n) {
                if (n) {
                    return callback(gerror.getErrorJson(10007));
                } else {
                    redisDb.hincrbyAsync("zylkey", [key, 1])
                        .then(
                            function (result) {
                                var value = [
                                    "registerId", result,
                                    "mobilePhone", mobilePhone,
                                    "password", password,
                                    "cookie", cookie
                                ];
                                redisDb.hmsetAsync(key + ":" + result, value).then(
                                    function (data) {

                                        redisDb.setAsync('usr:' + mobilePhone, key + ":" + result).then(
                                            function () {
                                                callback(gerror.getSucessJson());
                                            },
                                            function (error) {
                                                callback(gerror.getErrorJson(10003));
                                            })

                                    }, function (error) {
                                        if (error) {
                                            callback(gerror.getErrorJson(10003));
                                            return;
                                        }
                                    });
                            },
                            function (error) {
                                if (error) {
                                    callback(gerror.getErrorJson(10003));
                                    return;
                                }
                            });
                }

            })


        });
    },
    update:function(paramData, callback){

    },
    get:function(paramData, callback){

    },
};