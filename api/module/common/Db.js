/**
 * Created by mango on 2015/11/26.
 */
var redis = require("redis");
var bluebird = require("bluebird")
var config = require("../../config");
var error = require("../../error");
module.exports = {
    getRedisClient: function (callback, connectSucess) {
        bluebird.promisifyAll(redis.RedisClient.prototype);
        bluebird.promisifyAll(redis.Multi.prototype);
        var client = redis.createClient(config.DbPort, config.DbHost);
        client.on("error", function (error) {
            callback(error.getErrorJson(10002))
        });
        client.on("connect", function (err, reply) {
            if (typeof connectSucess == "function") {
                connectSucess(client);
            }
        });
    }, key: {
        "1":"user:registerInfo"
    }
}