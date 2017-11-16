/**
 *单个模块
* */
// function printHenry() {
//     console.log("Henry最喜欢的电影是湄公河行动");
// }
// function printWendy() {
//     console.log("Wendy最喜欢的电影是机械师2");
// }
// module.exports.printHenry = printHenry;
// module.exports.Wendy = printWendy;

/**
 * 如果有多个函数，那么需要使用对应数量的module。exports指定方法名
 */
module.exports = {
    printHenry:function () {
        console.log("Henry最喜欢的电影是湄公河行动");
    },
    printWendy:function () {
        console.log("Wendy最喜欢的电影是机械师2");
    },
    favMovie:"战狼！战狼！战狼！"
};
