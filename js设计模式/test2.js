function f1() {
    console.log(arguments);
    f2(...arguments)
}

function f2() {
    console.log(arguments);
}

f1(1, 2, 3)

let arr = [1, 2]
if (arr[2] > 30) {
    console.log('dsd');
}

let err = '';
let mb = true;
//if判断的时候如果里面是赋值一个bool为true 的值的表达式，可以通过
if (err = mb)
    console.log(err);
console.log('end');

let arr1 = [];
if (arr1)
    console.log('arr1为true');

console.log([...[1, 2, 3], 1, 6]);
console.log({
    ...{a: 'a', b: 'b'},
    b: 'b', c: 'c'
});
let t1 =[1,2];
let tt = [...t1]
console.log(t1 === tt);  //false
console.log(tt);

let vv = ''
if (vv)   //输出log
    console.log('vv是true');
console.log('false');

let zz = 0
if (zz)   //输出log
    console.log('zz');
else
{
    console.log('false');
}
let o1 = {
    a:{b:11,c:22},
    b:{
        d:33
    }
};
