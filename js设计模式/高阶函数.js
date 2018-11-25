Function.prototype.beforeFun = function (before) {
    // const  THIS = this;
    return () => {
        //这里的this是定义时的this，就是这个beforeFun函数，然后他的this指向调用他的对象，也就是a方法
        // console.log(this.toLocaleString());
        before.apply(this, arguments);
        return this.apply(this, arguments);
    }
};

Function.prototype.afterFun = function (after) {
    // const  THIS = this;
    return () => {
        //这里的this是定义时的this，就是这个afterFun，然后他的this指向调用他的对象，也就是before方法
        // console.log('in aftrt...', this.toLocaleString());
        const nf = this.apply(this, arguments);
        after.apply(this, arguments);
        return nf;
    }
};
{
  let dog = 'my dog';
  const before = 'before'
    const a = () => {

        console.log('aaa');
    };

    const fun = a.beforeFun(() => {
        console.log(before);
    }).afterFun(() => {
        console.log('after');
    });
    fun();
}
{
   const add =  ( function () {
        let args = [];
        return function () { //他的参数就是add的参数，后面调用add就是调用这个函数
            //没有参数的时候输出计算结果
            if (arguments.length === 0) {
                let count = 0;
                for (let i = 0; i < args.length; i++) {
                    count = count + args[i];
                }
                console.log('计算完成：'+count);
                return count;
            }
            //有参数的时候把参数放在里面保存
            else{
                [].push.apply(args,arguments);
            }
        }
    })();
    add(1);
    add(1);
    add(1);
    console.log(add());


}
