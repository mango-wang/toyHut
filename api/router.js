/**
 * Created by mango on 2015/11/20.
 */

//var urlParser = require('url');
var config = require("./config");
var error = require("./error");
var qString = require("querystring");
module.exports = {
    router: function (req, callback) {
        var _this = this;
        req.params = req.params || {}; //断点找原因
        var methd = req.method.toUpperCase();
        if (methd == "GET" || methd == "DELETE") {

        }
        if (methd == "POST" || methd == "PUT") {
            var postData = [];
            req.addListener("data", function (postDataChunk) {
                postData.push(postDataChunk);

            });
            req.addListener("end", function () {
                try {
                    var data = Buffer.concat(postData).toString();
                   var jsonParams = qString.parse(data);
                    _this.invoke(jsonParams, callback);
                } catch (err) {
                    var a = err;
                }
            });
        }

    },
    invoke: function (paramsData, callback) {
        try {
            var module = require('./module/' + config.module[paramsData['module']]);
            var fn = module[paramsData['cmd']];
            fn(paramsData, function (json) {
                callback(json);

            });
        } catch (err) {
            callback(error.getErrorJson(10001));
        }
    }
};
