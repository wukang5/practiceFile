/**
 * Created by wk on 2017-11-16.
 */
//使用回调函数处理多个请求，保证线程不会被堵塞
function placeAndOrder(orderNumber) {
    console.log("第" + orderNumber+ "个看病的病人");
    checkAndDeliverPatient(function () {
        console.log("第"+orderNumber+"个病人已经看完病了，下一个病人可以进去了看病了");
    })
}
function checkAndDeliverPatient(callback) {
    setTimeout(callback,5000);
}
placeAndOrder(1);placeAndOrder(2);placeAndOrder(3);placeAndOrder(4);placeAndOrder(5);