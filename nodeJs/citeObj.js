//理解node.js中对象的引用
var King = {
    favFood:"bacon",
    favMovie:"湄公河行动"
};
var Person = King;
Person.favFood = "Salad";
console.log(King.favFood);
//对象的引用会引用内存中相同的对象地址，产生的问题是改变一处，
// 其他引用对象的属性值也会同时发生改变