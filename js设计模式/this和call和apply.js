// {
//     let getId = (function (func) {
//         return function () {  //需要的事一个方法，所以返回方法（下面的就是getId实体）
//             //把document作为this传入自定义方法，实现功能
//             //返回在这个this中使用这些参数的结果
//             return func.apply(document, arguments);  //需要返回值
//         }
//     })(document.getElementById);
// }

{
    let fa = function () {
        console.log(arguments);
        // console.log(this===window); //在页面中为true
    }
    fa('111');
    // fa.apply(null, '111');

}

{
    /**
     * 这个方法可以手动修改调用方法的作用域,和自带的bind一样的功能
     * 这样局部的重写Object方法只在当前文件有效
     * @param obj
     * @returns {function(): *}
     */
    Object.prototype.myBind = function (obj) {  //Object或者Function开头都可以，这样定义的方法所有对象都可以用
        let _this = this; //这this是调用该方法的对象
        return function () { //加上这一层表示返回的是一个方法，方法的内容是调用方法，作用域改为obj
            _this.call(obj);  //让调用该方法的对象的作用域变成传入的参数
        }
    };
    let man = {
        name: 'jojo'
    }
    let func = function () {
        console.log(this.name);
    }.myBind(man);
    func();
}
{
    let man = {
        name: 'jojo'
    }
    let func = function () {
        console.log(this.name);
    }.myBind(man);
    func();
}

