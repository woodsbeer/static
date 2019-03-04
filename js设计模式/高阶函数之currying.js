{
  //目的是返回函数，
  const currying = function (fn) {
    let args = [];
    //返回一个方法，他根据参数的数量调用自己定义然后从上面传进来的cost，或者增加args
    return function () {
      if (arguments.length === 0) {
        console.log(this);
        return fn.apply(this, args);
      } else {
        [].push.apply(args, arguments);
        //返回的是当前的匿名函数
        return arguments.callee;
      }
    }
  };
  //完成实际操作的函数，他会对currying里面的args进行操作，比如求和
  let cost = function () {
    let count = 0;
    for (let v of arguments) {
      count += v;
    }
    return count;
  };
  cost = currying(cost);
  cost(100);
  cost(1100);
  console.log(cost(1500).toString());
  console.log(cost());
}
{
  Function.prototype.uncurrying = function () {
    const self = this; //获取this，也就是调用这个方法的那个方法对象
    /**
     * 以后使用这个方法的时候两个参数
     * 第一个参数是被调用方法对象，第二个是参数
     */
    //箭头函数不可用argumnts,他的arguments是外部函数，也就是uncurrying的参数
    return function () {
      let obj = Array.prototype.shift.call(arguments);
      console.log(arguments.length);
      console.log(obj);//获取第一个参数，作为被操作对象，以后会作为apply的第一个参数
      return self.apply(obj, arguments);//arguments在被shift一次之后就少了原本的第一项，剩下的是作为调用时的参数
    }
  };
  const push = Array.prototype.push.uncurrying();
  let array = [1, 2, 30];
  push(array, 4);
  console.log(array);
  (function () {
    push(arguments, 44);
    console.log(arguments);
  })(1, 2, 3)

  //用在别的方面,全绑定在array上面
  for (let i = 0, fn, array = ['shift', 'forEach', 'push']; fn = array[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying();
  }
  let obj = {
    0: 1,
    1: 2,
    2: 3
  };
  console.log(obj);
  Array.push(obj, 4);
  console.log(obj); //{ '0': 4, '1': 2, '2': 3, length: 1 }
  console.log(Array.shift(obj)); //4

}
{
  //正确执行一次后加上timeout，接下来执行的时候如果timeout存在，就返回false
  const throttle = (fn, interval) => {
    let timer, first = true, _fn = fn;
    return function () {
      if (first) {
        fn(arguments);
        return first = false;
      }
      if (timer) {
        return false;
      }
      fn(arguments);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        //fn是箭头函数，所以他的this是他定义时的对象，不收setTimeout影响
        // _fn(arguments);
      }, interval || 500)
    }
  }

}
{

  const timeChunk = (array, fn, count) => {
    let t;
    const oneCir = () => {
      for (let i = 0; i < Math.min(count || 10, array.length); i++) {
        let oneData = array.shift();
        fn(oneData);
      }
    };
    //返回的这个方法会调用闭包中的函数和属性
    return function () {
      t = setInterval(() => {
        if (array.length === 0)
          return clearInterval(t);
        else {
          oneCir();
        }
      }, 700)
    }
  };

  function write(data) {
    console.log('我打印了:', data);
  }

  let data = [];
  for (let i = 0; i < 300; i++) {
    data.push(i);
  }
  const writing = timeChunk(data, write, 30);
  writing();

}

