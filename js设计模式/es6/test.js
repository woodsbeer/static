// var global = require('system.global')();
global.mdb = new Map();
console.log(global);

const arr = [1,2];
for (const arrKey in arr) {
    console.log(arrKey);
}


let string = '是我dio哒！';
let resString = string.split('').splice(0,string.length-1).join('');
console.log(string,'string');//是我dio哒！  因为是化成数组然后在splice，所以原字符串不受影响
console.log(resString,'resString');
console.log(string.slice(0, string.length - 1));
// console.log(string.splice(1,1,'jojo'));