let re1 = /a+/g;   //全局
let re2 = /a+/y;    //黏连
let text = 'aaabaa';
//
console.log(re1.test(text));
console.log(re2.test(text));
//第二次y没查出来，因为第二次查询从b开始，g可以继续找知道找到a，y只在第一个字符找一次
console.log(re1.test(text));
console.log(re2.test(text));

let aa = 'aaa';
console.log(aa, 'ssss'); //中间会加上空格
console.log(aa + 'ssss');

let xxx = "𠮷ds";
console.log('zhiyou𠮷',/^.$/u.test('𠮷'));
console.log('𠮷ddd',/^.$/u.test('𠮷ddd'));
{
    /**
 获取真正的长度，因为有些字符长度超过一个字节
 */
    function codePointLength(text) {//  \s查找空白字符。\S查找非空白字符。
        var result = text.match(/[\s\S]/gu); //加上u才可以匹配码点大于0xFFFF的Unicode字符，比如𠮷这个字，g是全局搜索，让match不停地寻找搜索
        return result ? result.length : 0;
    }
    var s = '𠮷 𠮷e';
    console.log(s.length); // 4
    console.log(codePointLength(s)); // 2
}