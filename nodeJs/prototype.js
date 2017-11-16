//nide.js中的原型 prototype
//创建一个类
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function (targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + "给" + targetPlayer.name + "加了一滴血");
    }
}
//创建两个对象
var Bucky = new User();
var Wendy = new User();

//给两个对象添加名字
Bucky.name = "郭靖";
Wendy.name = "蓉儿";

//A对象调用加血的方法（giveLife）给B对象
Bucky.giveLife(Wendy);

//验证两个对象的血量值
console.log("郭靖：" + Bucky.life);
console.log("蓉儿：" + Wendy.life);

//需求：在不改变当前类结构的情况下，为当前类添加减血的方法
User.prototype.uppercut = function (targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + "给" + targetPlayer.name + "减了三滴血")
}
//调用减血方法
Wendy.uppercut(Bucky);

//验证两个对象的血量值
console.log("郭靖：" + Bucky.life);
console.log("蓉儿：" + Wendy.life);

//通过prototype为类追加属性
User.prototype.magic = 60;

console.log("郭靖的法力值为：" + Bucky.magic);