{
  const getQuery = query => {
    let queryStr = '?'
    if (query) {
      for (const key in query) {
        queryStr += `${key}=${query[key]}&`
      }
      return queryStr.slice(0, queryStr.length - 1)
    }
  }
  const query = {name: 'jojo', age: 18}
  console.log(getQuery(query));    //?name=jojo&age=18
}
{
  function compareVersionChongxie(v1, v2) {
    const arr1 = v1.split('.');
    const arr2 = v2.split('.');
    //遍历最长的那个数组
    const max = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < max; i++) {
      let val1 = arr1[i];
      let val2 = arr2[i];
      //一般情况下肯定是length>=i+1的,如果小于的话就是i已经在数组外面了，当然我们也可以通过判断当前值是不是NAN来判断
      val1 = arr1.length < i + 1 ? 0 : val1;
      val2 = arr2.length < i + 1 ? 0 : val2;
      if (val1 > val2)
        return 1
      if (val1 < val2)
        return -1
      //如果值一样就进入下一层循环
    }
    return 0
  }

  console.log(compareVersionChongxie('1.1.1', '1.1'));  //1
}
{
  //A-Z總共26個字母，因此這就是一個26進位的系統
  // 將字串分別取出字元A-Z，根據ANSI CODE，A的code為65，A = 65 - 64 = 1
  // 以AB為例， AB = (A)26^1 + (B)26^0 = 126+ 2*1 = 28
  // 以AZ為例， AZ = (A)26^1 + (Z)26^0 = 126+ 26*1 = 52
  //可以理解为一个24进制的数组转化为十进制
  function titleToNumber(str) {
    let sum = 0;
    let index = 0; //这个计数保证每次得到正确的位数进行pow计算
    for (let i = str.length - 1; i >= 0; i--) {
      let v = str.charCodeAt(i) - 64;  //累加计算是用当前的数字乘位数的pow
      sum += v * Math.pow(24, index++)
    }
    return sum
  }

  console.log(titleToNumber('AB'));
}
{
  //是不是三的次方
  function isPowerOfThree(num) {
    let n = num;
    while (n >= 3) {
      if (n % 3 !== 0)
        return false
      n = n / 3
    }
    //如果上一次的相除结果是小于三的数字，无法进入上面的判读语句
    //返回的时候判断是不是最后的相除结果为1
    return n === 1
  }

  console.log(isPowerOfThree(6)); //false
}
{
  //2的倍数
  //当大于1的时候都除以2，之后如果是1就true，如果不是2的倍数到最后会是小于1的小数
  const isPowerOfTwo = function (n) {
    if (n <= 0) return false;

    while (n > 1) {
      n = n / 2;
    }
    if (n === 1) return true;
    if (n < 1) {
      return false
    }
    // return n%2 === 0;
  };
  console.log(isPowerOfTwo(3));
}

{
  //Example: 19 is a happy number
  // 1^2 + 9^2 = 82
  // 8^2 + 2^2 = 68
  // 6^2 + 8^2 = 100
  // 1^2 + 0^2 + 0^2 = 1
  // 翻譯
  // 判斷一個數字是否為happy number。
  // happy number 定義如下：當一個數的每位數平方後相加，
  // 大於1則重複每位數開平方相加的動作，如果最後得到1的話，這個數就是happy number，如果進入無窮迴圈，這個數就不是happy number。

  //把递归和闭包结合在一起
  function isHappy() {
    const store = []
    return function d(dn) {
      //如果在闭包中的store有过这个值了，说明我们已经陷入了无限循环，可以false
      if (store.indexOf(dn) !== -1) {
        return false
      }
      store.push(dn);
      let arr = dn.toString().split('');
      let sum =0;
      for (const arrElement of arr){
        //虽然转化为string了还是可以计算
        sum+=Math.pow(arrElement,2);
      }
      if (sum===1)  //如果为1就是快乐树
        return true;
      return d(sum) //递归的时候一定要加上return，不然我们会得到undefine，因位内层函数的返回值不会往外传递
    }
  }
  console.log(isHappy()(19));
}

