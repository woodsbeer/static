{
    let arr = [1, 2, 3, 2];
    let aSet = new Set(arr);//不能有重複的值，可以去重
    console.log(aSet.size); //是size不是length
    aSet.add(8);
    aSet.delete(2);
    console.log(aSet);
    console.log(aSet.has(1));
    aSet.clear();  //清空
}
{
    /**
     * weakset只能放引類型，也就是一個內存地址
     * @type {WeakSet<Object>}
     */
    let weakSet = new WeakSet();
    let a = function fa() {
        console.log('haha');
    };
    let b = [1];
    let c = 4;
    weakSet.add(a);
    weakSet.add(b);
    // weakSet.add(c);  //會報錯
    console.log('weakSet', weakSet.has(a));  //true
}
{
    let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    console.log(map.get('c')); //3
    let map2 = new Map();
    let arr = [11,22];  //map的key可以是任何類型，數組都行
    map2.set(arr,'11');
    console.log(map2.get(arr)); //11
}
//weakMap的key必須是對象(引用類型）