/**
 * Created by Rubick.Li on 2017/9/19.
 */
/**
 * 日期格式化
 * @param format
 * @returns {*}
 */
Date.prototype.format = function (format) {
    // debugger
    const o = {
        //用正则去匹配我们传进来的格式，替换成相应的日期部分
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'H+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds(),
    };
    //年份的获取和别的不一样，因为他是从获取的年份取后面的相应位数
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
            //这里判断如果是一个匹配字母的话就直接返回相应的日期部分，如果不是一个字，那就是如果小于十前面要加上0了
            //我们再使用substr获取最后两位（因为是两个0加上指定日期部分，所以后两位就是日期指定部分的长度）
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr(`${o[k]}`.length))
        }
    }
    return format
};

console.log(new Date('2018-12-01').format('--M'));
console.log(new Date().getFullYear());
