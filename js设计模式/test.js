

(function f() {
  let a = 1;
  console.log(a++);
})()

{
  const arr = [0, 1, 2]
  console.log(arr[0]);
  arr.splice(0, 1);
  console.log(arr[0]);
}

{
  //给一个类添加方法有两种途径，一是构造类的protpttype添加，要，要么是得到一个实例，然后方法直接作为实例的水性添加
  function F1() {
  }
  F1.prototype.say1 = function () {
    console.log('111')
  }
  const f = new F1();
  f.say2 = function () {
    console.log('222');
  }
  f.say1();
  f.say2();
}
{
  (function(){
    console.log('ok');
  }());
 const ok =  (function () {
    console.log('ok too');
  })()
}

console.log(parseInt('11px'));

console.log([5, 3, 9].sort());
let aaa= [1,2,3,4];
console.log(aaa.splice(1,3)); //[ 2, 3, 4 ]
console.log(aaa); //1

console.log(test1);
{
  const man = {
    name:'jojo'
  }
}
