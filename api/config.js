/**
 * Created by mango on 2015/11/20.
 */
module.exports = {
    /*
    mysql
     */


    /*
     服务器配置
     */
    Host: "127.0.0.1",
    Port: "8888",
    /*
     redis
     */
    DbHost: "182.92.189.89",
    DbPort: "6379",
    /*
     模块定义
     */
    module: {
        "01-0001-0000": "test/serviceTest",
        "01-0001-0001": "user/login",
        "01-0001-0002":"vip/vip"
    }
};