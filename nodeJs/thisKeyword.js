//在nide.js环境中，this关键字的指向
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky!");
        console.log(this === Bucky);
    }
}
Bucky.printFirstName();
function doSomethingWorthless() {
    console.log("I'm worthless");
    console.log(this === global);
}
doSomethingWorthless();

//在前端页面中，this在没有指向任何对象的情况下，默认指向window，
// 否则指向具体对象
//在node环境下，this在没有指向任何对象的情况下，默认指向global，
//否则指向具体对象