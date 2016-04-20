var mysql = require('../common/mySqlHelper')
module.exports = {
    getStates: function (paramData, callback) {
        var option = {
            sql: 'select * from state',
            handler: function (result) {

                callback(result);
            }
        }
        mysql.execQuery(option);
    },
    set: function (paramData, callback) {

        var str = "'" + paramData.email + "','" + paramData.type + "',now(),'" + paramData.state +"','" + paramData.firstName +"'";
        var option = {
            sql: 'insert into  vip (email,type,createTime,state,firstName) values (' + str + ')',
            handler: function (result) {
                callback(result);
            }
        }
        mysql.execQuery(option);

    },
    get: function (paramData, callback) {
        var option = {
            sql: 'select * from state',
            handler: function (result) {

                callback(result);
            }
        }
        mysql.execQuery(option);
    },
    getList: function (paramData, callback) {
        var option = {
            sql: 'select * from state',
            handler: function (result) {

                callback(result);
            }
        }
        mysql.execQuery(option);
    }
}