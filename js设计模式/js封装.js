{
    var aa = function () {
        var name = 'jojo';  //外面无法得到
        return {
            getName:function () {
                return name;  //把name公开出来
            }
        }
    }();   //执行过以后下面才能得到函数里的东西


    var aaa = {
        name: 'dio',
        say: function () {
            console.log('hahaha');
        }
    };
    function Person (name){
        this.name = name;
    }
    let xiaoming = new Person('xiaoming');

    console.log(aa.getName());
    console.log(aa.name);  //undefined
    console.log(aaa.name);
    console.log(Object.getPrototypeOf(xiaoming)===Person.prototype);  //true, 是一个Person构造函数的实例Person{}

}
{
    /**
     * 自己封装的new Constructor()过程
     */
    function man(name) {
        this.name = name;
    }
    function ani(color){
        this.sleep = function () {
            console.log('ssss');
        }
    }
    man.prototype = new ani();
    man.prototype.say = function () {
        console.log('haha');
    };

    /**
     * 参数1 构造函数
     * 参数2 属性
     * @returns {对象}
     */
    function objectFectory() {
        console.log(arguments[0],'0');
        console.log(arguments[1],1);
        console.log(arguments[2],2);

        let obj = new Object();
        //这里得到的参数有length属性但是不是Array，让他使用Array的shift方法，去掉并那到他的第一个参数，同事把参数本身变成Array
        let constructor = Array.prototype.shift.call(arguments);  //得到构造函数
        console.log(typeof arguments,'type of arguments');
        //指向正确是原型
        obj.__proto__ = constructor.prototype;
        let ret = constructor.apply(obj,arguments);  //在obj的作作用域中使用构造函数，传入参数
        return typeof ret ==='object'?ret:obj;


    }
    let man1 = new man('dio');
    let man2 = objectFectory(man,'dio2');  //自己构造生成的man2的property是Object.prototype
    console.log(man1,Object.getPrototypeOf(man1), man2);//man { name: 'dio' } man { say: [Function] } man { name: 'dio2' }
    console.log(man2.name,'man2.say');
    console.log(man1.say());
    console.log(man1.sleep());
    console.log(Object.getPrototypeOf(man1));//man1 man2 的原型都是ani
    console.log(Object.getPrototypeOf(man2));
    console.log(man1.__proto__);
    console.log(man1.prototype); //__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性


}