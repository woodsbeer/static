console.log(0b111); //0b或者0B开头表示二进制，0o是八进制
{
    console.log(Number.isFinite(NaN));//是否有限
    console.log(Number.isNaN('sasa'));//是否nan
    console.log(Number.isInteger(25.0)); //25.0=25,所以判定为整数
    console.log(Number.isInteger('25.0')); //字符串不算整数
    console.log(Number.isSafeInteger(55)); //是不是在范围内的安全数（不超出存储范围）
    console.log(Math.trunc(4.6));  //取整数
    console.log(Math.sign(-5)); //负数-1，正数1
    console.log(Math.sign('4')); //1

}
{
    let aa = Array.of(1, 2, 3,);
    console.log(aa);
//Array.from可以把所有拥有length属性的东西转化为数组，document.getElementsByClassName的 dom对象也可以
    console.log(Array.from('小可爱最棒！', function f(item) {
        return item + '❥(^_-)';   //改变每一项
    }));

    /**
     * 遍历打印数组的索引和值
     */
    for (let [index, value] of ['111', '222', '333'].entries()) {
        console.log(index, value);
    }
    console.log('22' + 1); //221
    console.log([11, 33].includes(11));  //检测是否包含某一项
    console.log([11, 33, NaN].includes(NaN));  //在es6中才可以比较，5中NAN=NAN是false
}

{
    // array he map 的增删改擦
    const arr = [];
    const map = new Map();

    arr.push({a: 'aaa'});
    arr.push({b: 'bbb'});
    map.set('a', 'aaa');

    console.log('arr.find(obj => obj.a)',arr.find(obj => obj.a));
    //arr1.findIndex((value, index, arr) => {
//     return value > 4
// })
//     的缩写，参数（value）是obj，输出obj。a不是空的所有obj
    console.log(map.get('a'));

    //改
    arr.forEach(obg => obg.b ? obg.b = 'bbbbbbbbbbb' : obg.b = '');
    map.set('a', 'aaaaaa');
    console.log(arr);
    console.log(map);

    //删
    let index = arr.findIndex(obj => obj.a);
    arr.splice(index, 1);  //根据索引删除
    console.log(arr);
}

{
    // set 的增，查和map一样
    let arr = [1, 2, 3];
    let set = new Set(arr);
    //set的改
    for (let s of set.keys()) {   //用of不是in ，遍历对象的key才用in
        //判断有没有
        if (s === 3)
        //先删除
            set.delete(3);
        //再增加
        set.add(333333);
        // console.log(typeof s);
    }
    console.log(set);
}
{
    let array = [1,2,3,4];
    for (let a of array){   //遍历数组用of，直接获取值
        console.log(a);
    }
}
{
    let oo = {
        name: "jojo",
        age: 18,
        genter: 'man'

    }
    oo.like = 'eat';
    //遍历对象用in
    for (let key in oo) {
        console.log(oo[key]);
    }
    //删除指定属性
    delete oo.like;
    console.log(oo);



}
{
    const arr = ['aa','bb','cc'];
    const [A,B,C] = arr;
  console.log(A);    //aa
}

