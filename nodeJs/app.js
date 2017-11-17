//对象
var  person = {
    firstName:"King",
    lastName:"Wu",
    age:28
};
console.log(person.firstName);
//函数
function addNumber(a,b) {
    return a+b;
}
console.log(addNumber(5,2));
//查看函数默认返回值
function worthless() {
    //undefined
}
console.log(worthless());
//匿名函数
function printNoNameFunc() {
    console.log("匿名函数和有名字的函数，名字相同，在调用时会调用哪个");
}
var printNoNameFunc = function () {
    console.log("匿名函数就是没有名字的函数");
}
printNoNameFunc();
//定时器
setTimeout(printNoNameFunc,5000);