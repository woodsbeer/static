// let babel = require("babel-polyfill");
var xxx = "𠮷ddd";
/**
 * 遍历每一个字，可以解析非正常的字
 */
for (let i of xxx){
    console.log(i);
}
{
    //字符模板，不需要引号加号分割了
    let name = 'jojo';
    let age = 18;
    console.log(`${name}的年龄是${age}`);//jojo的年龄是18
}
{
    console.log('11'.padStart(4, '0'));//前面补充0，如果长度大于目标就保持现状
    console.log(String.raw`${1+2}\n哈哈`); //自动转译\，所以不换行 ${1+2}这种写法只在``中有效
    // console.log(${1+6});//报错
}
