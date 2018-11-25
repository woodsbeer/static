{
    (function say(a, b = 'bbb') { //b设置了默认值，在b后面不可以有别的不设置默认值的参数
        console.log(a, b);
    })();
}
{
    function rest(...args) {  //参数存储为一个数组
        for (let i of args) {
            console.log(i);
        }
    };
    rest(1, 2, 3, 'fews')
}
//箭头函数
{
    /**
     分别是函数名，参数，返回值
     */
    let add = (a, b) => a + b;
    console.log(add(1, 2));
}
{
    /**
     新的建立對象的格式
     */
    var name = 'wangcai'
    var dog = {
        name,
        drak() {
            console.log('wangwangwang');
        }
    };
    console.log('dog[\'drak\']' + dog['drak'] + 'dog.drak()' + dog.drak);
}
{
    /**
     * 自定義變量名，方便後期修改名稱
     * @type {string}
     */
    let THENAME = 'name';
    let man = {
        [THENAME]: 'jojo'
    }
    console.log(man.name); //jojo
    console.log(man.THENAME); //undefined

}
{
    let a = 1;
    let b = a;
    let aa = [];
    let bb = [];
    console.log(a === b);  //true
    console.log(aa === bb); //false  【】其實是引用對象，兩個存著不同的內存地址

}
{
    let a = {
        age: '18'
    }
    let b = {
        name: 'dio'
    }
    /**
     * 遍歷a，賦值給b
     */
    for (let [key,value] of Object.entries(a)) {
        b[key] = value;
    }
    console.log(b);

}

{
    //在全局中搜索有没有以该参数作为名称的Symbol值，如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
    let ee=Symbol('eeee') ;
    let x = Symbol.for('ee'); //找到了名為ee的Symbol值
    let y = Symbol.for('ee');
    console.log('x',x);  //x Symbol(ee)

    let name = Symbol.for('theName');
    let age = Symbol.for('theAge');
    let o = {
        [name]:'jojo'
}
o[age] = 18;
    console.log(o);
    //Symbol的key不會被for循環獲取，除非調用Object.getOwnPropertySymbols
}