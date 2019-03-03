Function.prototype.after = function (fn) {
    const that = this;
    return function () {
        //argument无法使用concat，必须自己...展开或者使用Array.prototype.slice转化为数组
        const res = that(...Array.prototype.concat.call(...arguments,fn));
        if (res === 'next') {
            //每一个函数都有可能是异步的，所以每次都要传入下一个函数的调用，js每次接受的参数可以不一样，所以方法都会正常执行
            return fn(...Array.prototype.concat.call(...arguments,fn));
        }
        return res
    }

};
const jo1 = function (name, age) {
    if (name === 'jojo1') {
        return 'yes,iam jo1'
    } else {
        return 'next'
    }
};
const jo2 = function (name, age) {
    if (name == 'jojo2') {
        return 'yes,iam jo2'
    } else {
        return 'next'
    }
};
//异步函数接受下一个函数的引用，在回调中执行他，使职责链继续
const dio = function (name,age,fn) {
    setTimeout(()=>{
        const res  = fn(name,age);
        console.log(res);
        // return  res
    },1000)
}
const list = jo1.after(dio).after(jo2);
console.log(list('jojo2', 1));
