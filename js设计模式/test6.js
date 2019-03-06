{
    /**
     * es5闭包方式的循环注册自定义的检测方法
     */
    let Type = {};
    for (let i = 0, type; type = ['String', 'Array', 'Number'][i]; i++) {   //使用var的话之后显示的i是3，查不到type
        (function (type) { //在闭包里定义函数，不会被外面干扰修改
                Type[type] = function (obj) {
                    console.log(i);
                    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
                }
            }
        )
        (type)

    }

    console.log(Type.Array(5));
}

const f1 = function(){
    console.log(arguments.length);
}
f1(1,2)

let j ='{}'
let jo = JSON.parse(j)
console.log(jo);