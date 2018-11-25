{/**
 浅克隆
 */
    let souce = {name: 'jojo', array: [1121, 554, 468]};
    let target = {type: 'target'};
    let result = Object.assign(target, souce);  //源的属性再加上目标的属性，返回目标
    console.log(target === result);
    console.log(JSON.stringify(result));
    console.log(result.array === souce.array+'result === souce');  //源和assign的返回值同一个引用
}
{
    /**
     * 深克隆
     * @type {{name: string, array: *[]}}
     */
    let souce = {name: 'jojo', array: [32, 'ffews']};
    let target = {type: 'target'};
    let result = Object.assign(target, souce);
    //eval会把作为参数的字符串当成js代码执行，下面包裹括号的目的是把生成的强制转化为对象而不是表达式
    // result = eval('(' + JSON.stringify(result) + ')');   //把返回值通过变成json字符串然后再变成对象，就是一个新的对象
    result = JSON.parse( JSON.stringify(result));   //另一种把字符串变成json对象的方法
    console.log('result === souce', result === souce);  //不同对象
    console.log(result.array === souce.array);   //不再是源的引用了
}

{
    const obj = { a: 1, b: 2,array:[1,2]}
    const obj2 = { ...obj } // => { a: 1, b: 2 }
    console.log(obj === obj2);   //不同的对象
    console.log(obj.array === obj2.array);  //同一个引用
}
{
    let str = 'jojo dio';
    console.log(str.split('  '));
}
