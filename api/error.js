/**
 * Created by mango on 2015/11/20.
 */
module.exports = {
    dictionary: {
        "10000": {
            desc: "cookie不能为空",
            path: "router",
            line: ""
        },
        "10001": {
            desc: "非法路径",
            path: "router",
            line: ""
        },
        "10002": {
            desc: "数据库链接失败",
            path: "",
            line: ""
        },
        "10003": {
            desc: "数据库操作失败",
            path: "",
            line: ""
        },
        "10004":{
            desc: "用户名和密码错误！",
            path: "",
            line: ""
        },
        /**
         * 注册
         */
        "10005":{
            desc: "缺少参数！",
            path: "",
            line: ""
        },
        "10006":{
            desc: "密码长度过长",
            path: "",
            line: ""
        },
        "10007":{
            desc: "手机号已经注册",
            path: "",
            line: ""
        },
    },
    getErrorJson: function (key) {
        var _this = this;
        return {
            result: key,
            desc: _this.dictionary[key].desc,
            content: {}
        }
    },
    getSucessJson: function (content) {
        return {
            restul: 0,
            desc: "sucessful",
            content: content
        }
    }
};
