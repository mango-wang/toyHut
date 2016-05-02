var mysql = require("mysql");
var state = require("./state.js")
var options = {
    host: '47.88.25.254',
    port: 1008,
    user: 'root',
    password: 'feifeidemao',
    database: 'urtoyhut',
};

var pool = mysql.createPool(options);

/**
 * 释放数据库连接
 */
exports.release = function (connection) {
    connection.end(function (error) {
        console.log('Connection closed');
        if (error) {
            console.log(error);
        }
    });
};
module.exports = {
    execQuery: function (options) {
        pool.getConnection(function (error, connection) {
            if (error) {
                console.log('DB-获取数据库连接异常！');
                throw error;
            }

            /*
             * connection.query('USE ' + config.db, function(error, results) { if(error) { console.log('DB-选择数据库异常！'); connection.end(); throw error; } });
             */

            // 查询参数
            var sql = options['sql'];
            var args = options['args'];
            var handler = options['handler'];

            // 执行查询
            if (!args) {
                var query = connection.query(sql, function (error, results) {
                    if (error) {
                        console.log('DB-执行查询语句异常！');
                        throw error;
                    }

                    // 处理结果
                    handler(results);
                });

                console.log(query.sql);
            } else {
                var query = connection.query(sql, args, function (error, results) {
                    if (error) {
                        console.log('DB-执行查询语句异常！');
                        throw error;
                    }

                    // 处理结果
                    handler(results);
                });

                console.log(query.sql);
            }

            // 返回连接池
            connection.release(function (error) {
                if (error) {
                    console.log('DB-关闭数据库连接异常！');
                    throw error;
                }
            });
        });
    },
    init: function () {
        var option = {}
        var $this  =this;
        //判断是否初始化完成数据
        option.sql = 'select count(*) from state';
        option.handler = function (result) {
            if (result[0]['count(*)'] > 0) {
                console.log('当前启动由于检测数据库有数据，并没有进行更多初始化');
            } else {
                var data = state();
                if (data) {
                    option = {
                        sql: 'insert into state (stateFullName,nickNameZh,acronym,capital,capitalNameZh) values',
                        handler: function (result) {
                            console.log(result);
                        }
                    };

                    var list = [];
                    for (var i = 0; i < data.length; i++) {
                        list.push("('" + data[i].stateFullName + "','" + data[i].nickNameZh + "','" + data[i].acronym + "','" + data[i].capital + "','" + data[i].capitalNameZh + "')");

                    }
                    option.sql = option.sql + list.toString();
                    $this.execQuery(option)

                }


            }

        }
        this.execQuery(option)
    }

};