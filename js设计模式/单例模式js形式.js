let user = (function () {
  let id = 1;
  let name = 'jojo';
  //这样就不用作为全局变量，要用的时候通过user获取
  //利用了闭包
  return {
    id, name
  }
})();
console.log(user.id);
console.log(this.id); //undefine

{
  const getSingle = (fn) => {
    let instance = '';
    //每一次调用getSingle会生成一个instance，使用返回的函数时会根据instance判断执行一次还是直接返回值
    //但是如果方法没有返回值的话instance就会一直是空
    return function () {
      return instance || (instance = fn.apply(this, arguments));
    }
  }
  function f1() {
    console.log('hahaha');
    return true;

  }
  const sf = getSingle(f1);
  sf();
  sf();
  sf();
}

