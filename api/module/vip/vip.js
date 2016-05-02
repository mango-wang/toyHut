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

        var str = "'" + paramData.email + "','" + paramData.type + "',now(),'" + paramData.state + "','" + paramData.firstName + "'";
        var option = {
            sql: 'insert into  vip (email,type,createTime,state,firstName) values (' + str + ')',
            handler: function (result) {
                var info = {
                    result: result.affectedRows == 1 ? 0 : 1
                }
                callback(info);
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
        var result = {
            result: 0,
            content: {
                items: [],
                total: 0
            }
        }

        var list = ['1=1']
        if (paramData['keyWord']) {
            list.push("( a.email = '" + paramData['keyWord'] + "' or  b.acronym ='" + paramData['keyWord'] + "')");
        }

        if (paramData['startDate'] && paramData['endDate']) {

            list.push("a.createTime BETWEEN '" + paramData['startDate'] + "' AND '" + paramData['endDate'] + "'");
        }


        var option = {
            sql: "select   a.email ,b.capital ,b.acronym ,a.createTime,  case when type =1 then 'vip' else 'support' end type " +
            "FROM vip a LEFT JOIN state b " +
            " on a.state = b.id  where "
            + list.join(' AND ') + ' ORDER BY a.createTime DESC  limit  ' + paramData['start'] + ',' + paramData['num'] + ';',
            handler: function (dataSet) {

                result.content.items = dataSet;

                option = {
                    sql: "select count(*) total FROM vip a LEFT JOIN state b " +
                    " on a.state = b.id  where "
                    + list.join(' AND ') + ';',
                    handler: function (dataSet) {
               
                        result.content.total = dataSet[0]['total'];

                        callback(result);
                    }

                }
                mysql.execQuery(option);
            }
        }
        mysql.execQuery(option);
    },

}