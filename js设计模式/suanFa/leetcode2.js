{
  //柠檬水找零，一开始没有钱，如果给我五块就收起来，给我十块就找零
  //钱的种类：5 10 15
  function buyNinfmeng(arr) {
    let five = 0, ten = 0
    for (let item of arr) {
      if (item === 5) {
        five++
      }
      else if (item === 10) {
        if (five === 0) {
          return false
        }
        else {
          five--;
          ten++;
        }
      }
      else if (item === 20) {
        if (ten > 0 && five > 0) {
          ten--;
          five--;
        }
        else if (five > 2) {
          five -= 3
        }
        else {
          return false
        }
      }
    }
    return true
  }

  console.log(buyNinfmeng([5, 5, 10, 10, 20]));
  console.log(buyNinfmeng([5, 5, 0]));
}
{
  //上面的问题用高阶函数解决
  //把缓存放在闭包里面，每次单独计算，可以获取闭包中的历史数据
  const buyNingmeng = (function () {
    let five = 0;
    let ten = 0;
    return function () {
      let item = arguments[0];
      if (item === 5) {
        five++
        return true
      }
      else if (item === 10) {
        if (five === 0) {
          return false
        }
        else {
          five--;
          ten++;
          return true
        }
      }
      else if (item === 20) {
        if (ten > 0 && five > 0) {
          ten--;
          five--;
          return true
        }
        else if (five > 2) {
          five -= 3
          return true
        }
        else {
          return false
        }
      }
    }
  })();
  console.log(buyNingmeng(5));  //true
  console.log(buyNingmeng(20));  //false
}

{
  //题干：一个数组中最长的不重复字符串

  //总体思路就是用一个数组存放所有可能出现的ascii码，设置好长度和下标的初始值，然后开始遍历
  //每一次循环把这个ascii码作为key，下标作为值放入数组，计算出长度为start和当前下标的差
  //以后如果这个key的值不是默认的-1或者比start要大，表示已经有过这个值，更新start为这个值上次出现的下标
  function getLonggestFromArr(arr) {
    //创建一个长度是最大的ascii值的数组，用来存放每一个字符对应的ascii值
    //每一次发现之前有出现过这个字符（数组中这个ascii的值比start大）
    let arrays = new Array(256);
    //全部填充-1，这样一开始所有值都会比arr的下标小
    arrays.fill(-1);
    //全局长度，当前长度，当前初始下标，
    let gl = 0, l = 0, start = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arrays[arr[i].charCodeAt()] > start) {
        //把start设置为上一次重复数字的下标
        //在计算长度的时候开始的那个下标是不算在长度里面的 0-（-1） = 1 ，从-1开始做为start，但是-1下标存的什么数字用不到
        start = arrays[arr[i].charCodeAt()];
      }
      arrays[arr[i].charCodeAt()] = i;
      l = i - start;
      gl = gl > l ? gl : l;
    }
    return gl;

  }

  console.log(getLonggestFromArr('aabcda'), 'getLonggestFromArr');
}
{
  //数组中的每一项是一个人的体重，后一个参数是一艘船的最大承重，要求返回可以提供船的最少数量（一艘船最多两个人）
  function howManyBoat(peoples, limit) {
    peoples = peoples.sort();
    let less = 0, biggest = peoples.length - 1;
    let count = 0;
    while (less <= biggest) {
      //从最胖的开始算，每次至少载一人
      count++;
      biggest--;
      //如果最轻的和最重的可以做一条船，就让他们凑一起
      if (peoples[biggest] + peoples[less] <= limit) {
        less++
      }
    }
    return count;
  }

  console.log(howManyBoat([3, 5, 3, 4], 5), 'howManyBoat');
}
{
  //重写getLonggestFromArr
  function getLonggestFromArr1(arr) {
    let start = -1, l = 0, L = 0;
    let cabel = new Array(256);
    cabel.fill(-1);
    for (let i = 0; i < arr.length; i++) {
      // if (cabel[arr[i].charCodeAt()] > start) {
      if (cabel[arr[i].charCodeAt()] > start) {
        start = cabel[arr[i].charCodeAt()];
      }
      cabel[arr[i].charCodeAt()] = i;
      l = i - start;
      L = L > l ? L : l;
    }
    return L;
  }

  console.log(getLonggestFromArr1('jiogg'));


}

