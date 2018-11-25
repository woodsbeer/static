{
  //返回最后一个单词的长度
  //输入: "Hello World"
  // 输出: 5
  function getlastLength(str) {
    return str.trim().split(' ').slice(-1)[0].length
  }

  console.log(getlastLength(' i love xinxinxin xin!'));

}
{
  //给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  //输入: "([)]"
  // 输出: false
  // 
  // 输入: "{[]}"
  // 输出: true

  //思路
  //要让输入的各种括号是合法排列，他们会是一种进出栈的形式，左括号存进去，匹配到右括号的话抵消掉
  //根据抵消成功与否返回布尔值，前面差如的时候每次返回true
  //循环中调用这方法的必须要时刻判断返回的布尔值，如果是false整个方法返回false表示不匹配

  const myChai = function () {
    const cabel = [];
    return {
      push(c) {
        if (c === '(' || c === '[' || c === '{') {
          cabel.push(c);
          return true
        }
        else if (c === ')') {
          if (cabel[cabel.length - 1] === '(') {
            cabel.pop();
            return true
          }
          else {
            return false
          }
        }
        else if (c === ']') {
          if (cabel[cabel.length - 1] === '[') {
            cabel.pop();
            return true
          }
          else {
            return false
          }
        }
        else if (c === '}') {
          if (cabel[cabel.length - 1] === '{') {
            cabel.pop();
            return true
          }
          else {
            return false
          }
        }
        else
          return true
      }, getLength() {
        return cabel.length
      }
    }
  }


  function isValid(str, cabel) {
    let arr = str.split('');
    let res;
    for (const arrElement of arr) {
      res = cabel.push(arrElement)
      if (!res) {
        return false
      }
    }
    const cabelLehgth = cabel.getLength()
    return cabelLehgth === 0;

  }

  console.log(isValid('([)]', myChai()));
  console.log(isValid('{[]}', myChai()));
  console.log(isValid('{[fdf]}', myChai()));

}
{
  //给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
  //这个方法不同于组合然后排序
  //获取两个数组的下标，用于循环取值
  //把arr1扩展成两个数组加起来的大小，后面暂时都是空的，他的长度是l1+l2-1
  //while的判断边界是l1+l2-1>=0，也就是被指向要替换的arr1的位置不是负数
  //每次把最后的值比较大的那个arr的最后一个值更新到新的arr1的指定位置，每次更新完那个arr的指针减一，无论什么情况都要必须减一
  //如果其中一个arr 的指针已经为负数了，就让另一个arr去替换，不要忘了依然要减一·

   function toOne(arr1, arr2) {
    let l1 = arr1.length;
    let l2 = arr2.length;
    let i;
    arr1 = arr1.concat(new Array(arr2.length));
    // for (i >= 0; i <= arr1.length - 1; i--) {
    while(l1+l2-1>=0){
      if (arr1[l1 - 1] > arr2[l2 - 1]) {
        arr1[l1 + l2 - 1] = arr1[l1 - 1];
        l1--
      }
      else if (arr1[l1 - 1] <= arr2[l2 - 1]) {
        arr1[l1 + l2 - 1] = arr2[l2 - 1];
        l2--
      }
      else {
        if (l1>0){
          arr1[l1 + l2 - 1] = arr1[l1-1];
          l1--
        }
        else {
          arr1[l1 + l2 - 1] = arr1[l2-1];
          l2--
        }
      }
    }
    return arr1

    // }
  }

  console.log(toOne([1, 4, 5], [3, 8]));
}

