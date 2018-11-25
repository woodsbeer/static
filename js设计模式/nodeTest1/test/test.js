const Immutable = require('immutable')
const o1 = {
    a:1,
    b:{
        c:3
    }
};
const om1 = Immutable.fromJS(o1);
const om2 = Immutable.fromJS(o1);
console.log(om1);
console.log(om1.b === om2.b);  //true
console.log(Immutable.is(om1, om2));  //true    但是使用===的时候是false，因为是两个不同的内存引用
om1.b = {c:88};    //这样赋值是没有效果的
console.log(om1);
console.log(om1.b === om2.b);

