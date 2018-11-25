{
  //假设你正在爬楼梯。需要 n 步你才能到达楼顶。
  //
  // 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
  //
  // 注意：给定 n 是一个正整数。
  //
  // 示例 1：
  //
  // 输入： 2
  // 输出： 2
  // 解释： 有两种方法可以爬到楼顶。
  //
  // 1 步 + 1 步
  // 2 步
  // 示例 2：
  // 输入： 3
  // 输出： 3
  // 解释： 有三种方法可以爬到楼顶。
//走n步的可能性就是倒数第二步的两种可能相加，
  /**
   * @return {number}
   */
  function PaLouti(num) {
    if (num === 1) {
      return 1;
    }
    if (num === 2)
      return 2
    return PaLouti(num - 1) + PaLouti(num - 2);
  }

  console.log(PaLouti(4));
}

{
  //二进制相加
  //输入: a = "11", b = "1"
  // 输出: "100"
  // 示例 2:
  //
  // 输入: a = "1010", b = "1011"
  // 输出: "10101"
  //思路是我们把输入的两串数字转化为数组再倒置，然后个位数就到了最前面，我们从最前面开始加，在最后返回前再倒转回来
  function add2(str1, str2) {
    let arr1 = str1.toString().split('').reverse();
    let arr2 = str2.toString().split('').reverse();
    let biggLength = Math.max(arr2.length, arr1.length);
    let c = 0;
    let s = '';
    for (let i = 0; i < biggLength; i++) {
      if (arr1[i] || arr2[i]) {
        let n1 = arr1[i] ? parseInt(arr1[i]) : 0;
        let n2 = arr2[i] ? parseInt(arr2[i]) : 0;
        ///计算的时候要算上上一次的进位，这里不算更新c，这里只是用c来计算当前的总和而已
        c = n1 + n2 + c;
        //二进制所以c只能是零或一，如果比1大的话取余数，多出来的之后会进位
        s = s + c % 2;
        //最后再更新一次进位给下一次使用
        c = c > 1 ? 1 : 0;
      }
    }
    if (c > 0)
      s = s + 1
    return s.split('').reverse().join('');
  }

  console.log(add2(1010, 1011));
  console.log(add2(11, 1));
}

{
//题目：报数序列是指一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作 "one 1" ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2", "one 1" （"一个二" , "一个一") , 即 1211。
//
// 给定一个正整数 n ，输出报数序列的第 n 项。
//

// 我们每次在原来的基础上得到一个新数组，替换
  function countAndSayChongxie(n) {
    let a = [1];
    for (let i = 0; i < n - 1; i++) {
      a = baoShu(a);
    }
    return a.join('');
  }

//注意这里是双重循环，因为我们在一次找相同循环结束以后还需要重设start继续找相同，所以外部需要一个循环
  function baoShu(arr) {
    let start = end = 0;
    let nextArr = [];
    while (end < arr.length) {
      while (arr[start] === arr[end]) {
        end++;
      }
      nextArr.push(end - start);
      nextArr.push(arr[end - 1])
      start = end
    }
    return nextArr;
  }

  console.log(countAndSayChongxie(4));

  function baoshu1(n) {
      let start = end = 0;
      //str在每次循环中接受值，不断去更新并最终返回
      let str = '1';
      //res在每次循环中根据某个逻辑生成，循环结束赋值给str，自己归零
      let res = '';
    for (let i = 1; i < n; i++) {
      while (end<str.length){
        while (str[start]===str[end]){
          end++;
        }
        res+=end-start;
        res+=str[start];
        start = end
      }
      str = res;
      res = ''
      start = end = 0  //不要忘记这两个也归零
    }
    return str;
  }

  console.log(baoshu1(5),'baoshu1');
}
{
  //题目（最大子序和）： 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  // 输入: [-2,1,-3,4,-1,2,1,-5,4],
  // 输出: 6
  // 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

  //我们要获取最大的连续数字累加合，所以肯定是从第一位开始的累加
  //因为是要随时获取最大的累加，如果当前的那个数字加上上一个累积和的结果比他自己更小，就设置他自己为累积和，
  //累加的和会在数组的每一步被记录下来，并不断地与后面相加追求更大的合，所以如果当前和前面相加的合反而很小的话还不如用自己本身的值去和后面的相加
  //和前面的值相加的结果反而比自己小的原因是前一个数是负数，如果自己是负数的话那么相加的结果肯定比自己大，可以存起来继续后后面比较，
  const maxSubArray = function (nums) {
    for (let i = 1; i < nums.length; ++i) {
      //因为每一步都要累加所以必须要有nums[i-1]+nums[i]这段代码，然后判断是不是前面的是负数所以要把自己的值设置为累加的初始值
      nums[i] = Math.max(nums[i], nums[i - 1] + nums[i]);
    }
    return Math.max(...nums)
  };
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}

