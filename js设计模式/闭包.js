{
  const mult = function () {
    let cache = {};   //该方法先自己执行，初始化定义该对象
    return function () {  //手动调用mult方法的时候回直接执行这一行，也就是返回的方法
      let arg = Array.prototype.join.call(arguments, ',');
      // console.log(typeof arg); //string
      if (cache[arg]) {
        return cache[arg];
      }
      let a = 1;
      //es6的遍历数组的方法
      for (let [index, value] of Array.prototype.entries.call(arguments)) {
        a = value * a;
      }
      return cache[arg] = a;
    }
  }();
  console.log(mult(1, 2, 3));
  console.log(mult(1, 2, 3));
}

{
  let tv = {
    play: function () {
      console.log('play the tv!');
    },
    close: function () {
      console.log('close the tv!');
    }
  };
  let computer = {
    play: function () {
      console.log('open and play the game!');
    },
    close: function () {
      console.log('close the computer!');
    }
  };

  function createCommend(sth) {
    this.play = sth.play;
    this.close = sth.close;
    return {
      play: this.play,    //从对象中返回
      close: this.close
    }
  }

  //方便切换不同的模式
  //只要在setAction里面改成别的类就行了
  function setCommend(commend) {
    $('#open').on('click', commend.play);
    $('#close').on('click', commend.close);
  }

  function setAction() {
    setCommend(createCommend(computer));
    //  setCommend(computer); 这样也行
  }


}
{
  /**
   * es6方式的循环注册自定义的检测方法
   */
  let Type = {};
  for (let i = 0, type; type = ['String', 'Array', 'Number'][i]; i++) {   //使用var的话之后显示的i是3，查不到type
    Type[type] = function (obj) {
      console.log(i);
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  }

  console.log(Type.Array([]), 'tytytytyt');
  // console.log(Type.Array.toString());
  console.log(Object.prototype.toString.call([]));  //[object Array]
}
{
  /**
   * es5闭包方式的循环注册自定义的检测方法
   */
  let Type = {};
  for (var i = 0, type; type = ['String', 'Array', 'Number'][i]; i++) {   //使用var的话之后显示的i是3，查不到type
    (function (type) { //在闭包里定义函数，不会被外面干扰修改
          Type[type] = function (obj) {
            console.log(i);
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
          }
        }
    )
    (type)

  }

  console.log(Type.Array([]));
}
/**
 * 单例模式
 * @param fun 要出创建单例的方法
 * @param e
 * @returns {Function}
 */
let getSingle = function (fun, e) {
  let aaa;
  console.log(Array.prototype.slice.call(arguments), '匿名函数外面');
  return function () {
    console.log(this === window, 'this=window');
    console.log(Array.prototype.slice.call(arguments), '匿名函数内部');
    aaa || (aaa = fun.apply(this, arguments));  //this是window
  };
};
let getScript = getSingle(function (node) {  //有参数的匿名函数
  return document.createElement(node);
}, 'e')

