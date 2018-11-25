let str = 'abc,acb';
console.log(str.replace(/[b]/, 'B')); //返回aBc,acb  返回修改后的字符串，元字符不会被修改，注意第一个参数不要加引号
console.log(str.match(/^\w[b]/).index);  //返回0 这个用来测试后是否有匹配项
let name = "Doe, John";
console.log(name.replace(/(\w+),\s*(\w+)/, "$2 $1"));  //返回John Doe 分别匹配若干非空字符串，逗号，若干空白符号（比如空格换行），后面的是匹配括号的引用
let str1="hello(world)";
console.log(str1.replace(/\([\w]*\)/g,""));  //匹配括号和他里面的内容

const myRe = /d(b+)d/;
const mstr = 'cdbbdbsdbdbz';
//总结，正则有g，exec是返回全部匹配的字符串，小括号内的匹配，匹配到的下标，下一次再匹配从那个下表开始，但是match是返回第一次和第二次匹配到的值
//如果没有g，exec每次返回第一个匹配到的，match的返回值和他一样，返回数组的0是第一个匹配到的（无论有没有g）

//返回的是一个数组，第一个是匹配的字符串，第二个是第一个小括号匹配的内容，第三个是第二个小括号（如果有的话）
// ，倒数第一个是被匹配的字符串，倒数第二个是字符串中第一个被匹配到的index
//如果有g，全局搜索，匹配第一次后lastindex会设置在第一次的结尾，第二次从哪里开始继续搜索，直到返回null，清空lastlndex
console.log(myRe.exec(mstr)); //[ 'dbbd', 'bb', index: 1, input: 'cdbbdbsdbdbz' ]
console.log(myRe.exec(mstr)); //[ 'dbd', 'b', index: 7, input: 'cdbbdbsdbdbz' ]
console.log(mstr.match(myRe),'match');  //[ 'dbbd', 'dbd' ]


let strV = ' jojo dio ';
//去除空格
//所有空格
const clearAll = /\s*/g;
console.log(strV.replace(clearAll, ''));
console.log(strV);
//去除两边空格
console.log(strV.replace(/^\s*|\s$/g, '')+'e');
//这里如果省略val直接使用parseInt的话会放入map的value和index两个参数，返回值会变成[1，NAN]
console.log(['1', '2'].map(val=>parseInt(val)));

const url = 'http://i.meizitu.net/2018/10/16b01.jpg';
console.log(url);
console.log(url.replace(/("|')/g, ""));

