//let块级作用域内有效
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i);

const cc = 'ccc';//const必须直接赋值，不然会报错，
// cc = 'dd';  //const不可以修改
console.log(cc);
const co = {
    a: 'ff',
    b: 'dd'
}
co.a = 'ff!';
console.log(co);//co是引用类型，co的值其实是一个内存地址，这个指针一直没变，所以可以修改对象


{
    // let a, b;
    [a, b, ...c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c);  //1 2 [ 3, 4, 5, 6 ]     //注意c是数组，因为c是单个对象，所以只能是数组
    function f1(...can) {
        console.log(can,'多参数test');   //[ 5, 3 ] '多参数test'
    }
    f1(5,3)
}
{
    let a, b;
    //注意小括号
    ({a, b} = {a: 2, b: 3});

    let {c: mc, d: md} = {
        'c': 'ccc',
        d: 'ddd'
    };
    //可以直接从json中取出相应的变量赋值给c,d
    console.log('json解析' + mc, md);


    console.log(a, b);
    //ab的交换值
    [a, b] = [b, a];
    console.log(a, b);
}
/**
 * 下面获取复杂json
 */
{
    let json2 = {
        name: 'jojo',
        others: {
            age: 18,
            gender: 'man'
        }
    };
    let {name: mn, others: {age: ma}} = json2;
    console.log('josn2.name+age' + mn, ma);
    let json3 = {
        name: 'dio',
        others: [{
            age: 180,
            gender: 'man'
        },
            {
                like: 'eat'
            }]
    };
    let {name: nn, others: [{age: aa}, {like: ll}],} = json3;
    console.log(nn, aa, ll);
}

{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    [a, , b] = f();//1 3  因为2被空了
    //快速分别取出函数的返回值
    console.log(a, b);
}


