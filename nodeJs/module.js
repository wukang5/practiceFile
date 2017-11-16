/**
 * 为了让node.js的文件可以相互调用，node.js为我们提供了一种机制 --- 模块系统
 *
 * node.js中的每一个文件都代表了一个模块，文件的类型是js/json数据格式等
 * */

/*
*单个调用
 */
// //node中的模块（module）
// var movies = require("./movie");
// //通过movies对象电泳movie.js中的方法
// movies.printHenry();
// movies.Wendy();


/*
*多个调用
 */
var movies = require("./movie");

//调用方法
movies.printHenry();
movies.printWendy();
console.log(movies.favMovie);

