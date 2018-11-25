//map是键值对，key可以是对象，

var map = new Map();

map.set(['a'], 555);
map.get(['a']) // undefined
// 上面代码的set和get方法，表面是针对同一个键，但实际上这是两个值，内存地址是不一样的，因此get方法无法读取该键，返回undefined。

// var global = require('system.global')();


global.mdb = new Map(); // 作为内存数据库使用  这样就是一个全局的小型内存数据库
mdb.set("a","aaa")