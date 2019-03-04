const d500 = function (money, payed, store) {
    // console.log('d500',arguments);
    if (money === 1 && payed === true) {
        console.log('500,get100');
    } else
        return 'next';
}
const d200 = function (money, payed, store) {
    console.log('d200', arguments);
    if (money === 2 && payed === true) {
        console.log('200,get50');
    } else
        return 'next';
};
const normal = function (money, payed, store) {
    if (store > 0) {
        console.log('nor success');
    } else
        console.log('no store');
};

function a1() {
    //在箭头函数内部使用this和argment不方便（会有bug），所以在外面列出来
    //又因为a1是我们封装好的chain对象的参数，在对象的passRes中调用，所以this是chain对象
    //function的this是调用它的对象
    const that = this;
    const arg = arguments
    setTimeout(() => {
        //因为后面a1会最为参数生成一个chain对象，他自己作为对象内部方法，所以a1倍执行的时候是被chain调用的，this执行chain对象，可以使用它的原型链方法
        that.goNext(...arg);
    }, 2000);
}

const ac = new chain(a1)

function chain(f) {
    this.f = f;
    this.next = null;
}

//我们手动设置并下一个节点
chain.prototype.setNext = function (c) {
    this.next = c;
    return c;
};
chain.prototype.goNext = function () {
    return this.next && this.next.passRes(...arguments)
}
//如果业务逻辑代码返回next，他会一层一层的调用这个方法往下执行
chain.prototype.passRes = function () {
    //方法的this是调用他的对象wayzx
    //我们在这里如果直接调用f(),f的this也是chain,这样写是强制把f的this设置为chain
    const res = this.f(...arguments);
    //或者 const res = this.f.apply(this,arguments);
    //如果下一个方法是异步的，也会先执行它本身，只是不会返回next来触发下下个方法了，需要在一步代码中手动goNext()
    if (res === 'next') {
        //gonext可以在这里调用，也可以在异步方法的回调中直接调用，只要拥有正确的this和aguments就行了
        this.goNext(...arguments)
        // this.next && this.next.passRes(...arguments)
    }
};
{
    //为了让职责连的逻辑操作和业务分开，我们自己设计原型，让他们继承这个原型就好了
    //有点是我们在方法内只管写自己的内容，不用管上一个下一个方法是谁，通过把他们封装成chain对象然后在外面统一调配顺序


    const chain500 = new chain(d500);
    const chain200 = new chain(d200);
    const chainNor = new chain(normal);
    const chainA1 = new chain(a1);

    chain500.setNext(chain200).setNext(chainA1).setNext(chainNor);
    chain500.passRes(1, false, 1);
}

// {
//   // 职责链的aop实现
//   //如果方法自己返回值是next，继续执行做为参数的下一个方法，
//   //注意箭头函数内部是没有argument的，要执行回调函数的内容的话必须返回function才能把参数传过去，
//   // 注意直接用 fn(arguments)必须用fn.apply(this,arguments);这种方式
//   //因为argument是一个多层数组
//   Function.prototype.after = function (fn) {
//     const  that = this
//     return function() {
//       const res = that(...arguments);
//       if (res === 'next') {
//         return fn(...arguments);
//       }
//       return res
//     }
//   };
//   const cd = d500.after(d200).after(normal);
//   cd(2,true, 11)
// }

