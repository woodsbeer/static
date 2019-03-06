{
  function quChong(arr) {
    let out = [];
    //遍历数组的方式
    for (let i of arr) {
      //输出-1是表示遍历不到这一项
      if (out.indexOf(i) === -1) {
        out.push(i);
      }
    }
    return out;
  }

  console.log(quChong([21, 43, 33, 33]));
}
{
  //每次遍历判断前面有没有
  function quChongg(arr) {
    let out = [];
    //遍历数组的方式
    for (let i = 0; i < arr.length; i++) {
      //indexOf可以判断独一无二
      if (arr.indexOf(arr[i]) === i) {
        out.push(arr[i]);
      }
    }
    return out;
  }

  console.log(quChongg([21, 43, 21, 33, 33]));
}
{
  let out = [];

//每次循环判断后面有没有
  function quChonggg(arr) {
    for (let i = 0; i < arr.length; i++) {
      out.push(arr[i])
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          //如果后面有一样的就上面的循环即进入下一层
          // j = ++i;
          // break;
          out.splice(i - 1, 1)
        }
      }


    }
    return out;
  }

  console.log(quChonggg([21, 43, 21, 33, 33,11]),'hhhh');
}

{
  //利用es6的set，它里面不能有重复的项
  function quChongSet(arr) {
    return Array.from(new Set(arr));
  }

  console.log(quChongSet([0, 1, 2, 2, 0]));
}
{
//去重并且合并
  function quchongAndConcat(arr1, arr2) {
    const arr = [].concat.apply([], arguments);
    return Array.from(new Set(arr));
  }

  console.log(quchongAndConcat([1, 2], [2, 3]));
}

