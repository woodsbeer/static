const test1 = 'test1'

console.log('ii'.charCodeAt());

function getSort(str) {
  return str.sort()
}

console.log('apve'.split('').sort().join(''));

console.log([...[1, 2, 3], 1, 5]); // [ 1, 2, 3, 1, 5 ]
let o = {a: 'aa', b: 'b'};
let oo = {...o,a:'aaaa'};
console.log(oo);  //{ a: 'aaaa', b: 'b' }

for (let i = 0; i <= 5; ++i) {
  console.log(i);
}

console.log(parseInt('1'));

console.log([1, 2].concat(new Array(5)).length);

let ss ='dsdfs';
for (let s in ss){
  console.log(s.toString());
}

