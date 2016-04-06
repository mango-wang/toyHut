/**
* Created by mango on 2015/11/20.
*/
var http = require("http");
var config = require("./config");
var wepApi = require("./webApi");
var service = http.createServer(function (req, res) {
    wepApi.run(req, res);
});
service.listen(config.Port, config.Host);
console.log('run:'+config.Host +':'+config.Port);