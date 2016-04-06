/**
 * Created by mango on 2015/11/20.
 */

var router = require("./router");
module.exports = {
    run: function (req, res) {
        var _this = this;
        router.router(req, function (json) {
            _this.resEnd(res, json);
        });
    },
    resEnd: function (res,json) {
        this.resWriteHead(res);
        res.end(JSON.stringify(json));
    },
    resWriteHead: function (res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By", ' 3.2.1');
        res.setHeader("Content-Type", "application/json;charset=utf-8");
    },
    name: "webapi"
};