let tt =``;
tt = `before${(1>2)&&'>'}`
console.log(tt);


function toPercent(point){
    var str=Number(point*100).toFixed(2);
    str+="%";
    return str;
}

console.log(toPercent(0.22255556416));


let n = 1.23324345;
let len = ("" + n).replace(/^\d+\./, '').length;
console.log(len);

console.log(1.1.toFixed(2));

let a = [];
console.log(a.concat(5));
console.log(a);