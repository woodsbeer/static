{
  //判断是不是回形数  如7887
  function huiXingShu(int) {
    let less = 1;
    let digit = 0;
    let quotient = int;
    //获取一共有几位
    while (quotient > 0) {
      digit++;
      quotient = Math.floor(quotient / 10);
    }
    let big;
    for (less, big = digit - less + 1; less < big; less++, big--) {
      if (getDigit(int, less) !== getDigit(int, big)) {
        return false
      }
    }
    return true
  }

  function getDigit(int, index) {
    if (index === 1) {
      return int % 10;
    }
    return Math.floor(int / Math.pow(10, index - 1)) % 10
  }

  console.log(huiXingShu(5555));
  console.log(huiXingShu(5585));
}

// {
//   //生成指定的矩形
//   //题干http://www.raychase.net/2639#palindrome-number
//   function getRect(arr, rows) {
//     if (rows === 1) {
//       return arr;
//     }
//     //一个矩形的数字的数量
//     const amountInRect = rows + rows - 2;
//     //有几个完整的rect
//     let rectNum = Math.ceil(arr.length / amountInRect);
//     // if (arr.length % amountInRect !== 0) {
//     //   //如果发现有剩余的不完整的
//     //   rectNum++;
//     // }
//     const rRows = rows;
//     const rCols = rectNum * (rRows - 1);
//     const map = new Array(rRows);
//     for (let row of map) {
//       row = new Array(rCols);
//     }
//     let i = 0;
//     //在每一个rect中，根据不同的pos位置让他用两种方式根据pos来确定x和y
//     while (i < arr.length) {
//       let a = arr[i];
//       //通过这个字符的位置和一个rect的字符量，得到他在当前rect的位置
//       let pos = i % amountInRect;
//       let foreRects = i / amountInRect;
//       let x, y;
//       if (pos < rRows) {
//         x = pos;
//         y = foreRects * (rRows - 1)
//       }
//       else {
//         x = rRows - 1 - (pos - rRows + 1)
//         y = rRows - x - 1 + foreRects * (rRows - 1);
//       }
//       map[x][y] = a;
//       i++;
//
//     }
//     let result = ''
//     //遍历我们的map数组，把里面的非空的（也即是我们手动定义的x和y）加入到输出中
//     for (let i = 0; i < rRows; i++) {
//       for (let j = 0; j < rCols; j++) {
//         if (map[i][j])
//           result = result = map[i, j]
//       }
//     }
//     return result;
//   }
//
//   console.log(getRect('PAYPALISHIRING', 4));
// }
{
  //Given a list, rotate the list to the right by k places, where k is non-negative.
  //Given 1->2->3->4->5->NULL and k = 2,
  //return 4->5->1->2->3->NULL.
  function routeList(arr, k) {

    for (let i = 0; i < k; i++) {
      arr.unshift(arr[arr.length - 1]);
      arr.splice(arr.length - 1, 1)
    }
    return arr;
  }

  console.log(routeList([1, 2, 3, 4, 5], 2));
}
{
  //定义这样的一个链表，链表的每个节点都存有一个0-9的数字，把链表当成数字， 表头为低位，表尾为高位。如1->2->3表示321，现在要对两个这样的链表求和。
  //输入: (2 ->4 ->3)+(5->6->4) 输出: 7->0->8

  //定义一个链表，要引用一个列表的话引用他的头就可以了，输出一个列表也是输出他的第一项（后面的项其实都是他的属性）
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  const addTwoFistNode = function (l1, l2) {
    let temp = 0, flag = 0;
    let l3 = new ListNode(0);
    //把res指向l3这个对象，以后再循环里面设置l3等于任何东西都不会影响我们的res
    let res = l3;
    if (l1 === null && l2 === null) {
      return l3;
    }
    while (l1 !== null || l2 !== null) {
      temp = flag + (l1?l1.val:0) + (l2?l2.val:0);
      if (temp > 9) {
        //把flag设置为1，下一次的循环计算的时候就可以加一
        flag = 1;
        temp = temp % 10;
      }
      else {
        //每次计算完以后都要设置flag的值，以免进位的数据被一直沿用
        flag = 0
      }
      l3.next = new ListNode(temp);
      //进入下一个循环，把当前的引用指向l3的next以便进一步设置，外部的res一直指向l3不会变
      l3 = l3.next
      l2 = l2?l2.next:null
      l1 = l1?l1.next:null
    }
    //如果在循环的最后flag=1，因为没有下一个循环了，所以额外处理
    if (flag === 1)
      l3.next = new ListNode(1);
    //res的第一个值是预设的0，所以跳过
    return res.next;
  };
  const l1 = new ListNode(2);
  l1.next = new ListNode(5);
  l1.next.next = new ListNode(4);

  const l2 = new ListNode(8);
  l2.next = new ListNode(3);
  // l2.next.next = new ListNode(0);
  console.log(addTwoFistNode(l1, l2));
}

