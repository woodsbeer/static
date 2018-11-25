{
  function getGongyue(a, b) {
    let big = a > b ? a : b
    let small = a > b ? b : a;
    if (big % small === 0)
      return small;
    //递归的时候每一层都会有返回值，这样最外面的函数才可以输出最里面的值
    return getGongyue(small, big % small);
  }

  console.log(getGongyue(80, 30));
}
{
  //把输入的数子的每位数拿出来
  function numToArray(num) {
     if (num === 0)
       return 0;

     return num%10+Math.floor(numToArray(num/10))

  }

  console.log(numToArray(222));
}

