{
//
//   爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。
//
// 因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
//
// 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
//
// 如果有多个答案，你可以返回其中任何一个。保证答案存在。
  //输入：A = [1,1], B = [2,2]
  // 输出：[1,2]
  function changeCandy(arr1, arr2) {
    let totalA = 0, totalB = 0;
    for (let arr1Element of arr1) {
      totalA += arr1Element;

    }
    for (let arr2Element of arr2) {
      totalB += arr2Element;

    }
    //我们可以得出双方交换的数量之间有联系
    //totalA-ac+bc = totalB-bc+ac
    //bc = ac+ (totalB-totalA)/2;
    let ac, bc;
    for (const arr1Element of arr1) {
      for (const arr2Element of arr2) {
        //我们已经得到了两个交换数的关系，遍历arr1，同时在arr2中检索，如果有符合关系的就返回
        if (arr2Element === arr1Element + (totalB - totalA) / 2)
          return [arr1Element, arr2Element]
      }
    }
  }

  console.log(changeCandy([1, 1], [2, 2]));
}

{
  // 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
  // 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
  //输入: [1,8,6,2,5,4,8,3,7]
  // 输出: 49

  //方法一
  function getMaxSqu1(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        max = Math.max(max, (j - i) * Math.min(arr[i], arr[j]));
      }
    }
    return max;
  }

  console.log(getMaxSqu1([1, 8, 6, 2, 5, 4, 8, 3, 7]));

  //节省遍历次数的方法2
  //我们设置头尾两个指针，然后因为可能最外面的两块版太短所以里面可以存储更多水，我们让相对更短的那快板的指针往里面移动
  //因为我们现在已经占据了尽可能大的宽度，如果想得到更大的面积的话应该尽可能的让自己的高去变的更高，所以移动短的那条边
  //总结思路就是先占据的得到最大面积的一个因素，获取最大宽度，然后在调整另一个因素，高度，调整方式是让偏小的那个高度的指针往里面移动
  function getMaxSqu2(arr) {
    let i = 0, j = arr.length - 1;
    let max = 0;
    while (i < j) {
      let heightI = arr[i];
      let heightJ = arr[j];
      max = Math.max(Math.min(heightI, heightJ) * (j - i), max)
      if (arr[i] < arr[j])
        i++;
      else
        j--;
    }
    return max;
  }

  function getMaxSquChongxie(arr) {
    let i = 0, j = arr.length - 1;
    let max = 0;
    while (i < j) {
      let hi = arr[i];
      let hj = arr[j];
      max = Math.max(max, (j - i) * Math.min(hi, hj));
      if (hi < hj) {
        i++
      }
      else {
        j--;
      }
    }
    return max;
  }

  console.log(getMaxSqu2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  console.log(getMaxSquChongxie([1, 8, 6, 2, 5, 4, 8, 3, 7]), '重写');
}
{
  //
//   给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
//
// 如果有两个中间结点，则返回第二个中间结点。
//   输入：[1,2,3,4,5,6]
//   输出：此列表中的结点 4 (序列化形式：[4,5,6])
//   由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
  function Node(data) {
    this.data = data
    this.next = null
  }

  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);

  //第一种思路，从head开始，一次一次的遍历把所有的节点放到数组里面
  function getMiddle(head) {
    let array = [head];
    //如果数组中的最后一个节点的next不是null，就继续放
    while (array[array.length - 1].next !== null) {
      array.push(array[array.length - 1].next);
    }
    //Math.trunc()去掉小数点取整
    return array[Math.trunc(array.length / 2)]
  }

  //方法二，我们有两个指针，他们同时从head节点开始，如果快的那个节点已经被加到空或者作为末尾没next了，就返回慢的那个
  //因为速度是两倍，所以慢的那个一定在中间
  function getMiddle2(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow
  }

  function getMiddle2Chongxie(node) {
    let slow = node ,fast = node;
    while (fast&&fast.next){
      slow = fast.next
      fast =  fast.next.next;
    }
    return slow
  }

  console.log(getMiddle(head));
  console.log(getMiddle2(head));
  console.log(getMiddle2Chongxie(head));
}
{
  // const num = 8;
  // console.log(num.toString(2)); //1000
  //题干 找到传入的数字的二进制中相隔最远的两个1的距离
//   输入：5
//   输出：2
//   解释：
// 5 的二进制是 0b101 。
  function oneToOne(num) {
    //我们把输入的number转化为二进制，然后在分割为数组
    const binary = num.toString(2).split('');
    let oneArry = [];
    let max = 0;
    //把这个数组中值为1的项，保存他的key
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
        oneArry.push(i)
      }
    }
    //把我们获取的那些key做差，取得最大的那个
    for (let i = 0; i < oneArry.length - 1; i++) {
      let pre = oneArry[i];
      let nex = oneArry[i + 1];
      max = Math.max(nex - pre);
    }
    return max
  }
//要得到一个数组中特定值的最大间距，在每次匹配到特定值的时候记录并和上一个记录做差就好了
  function oneToOne2(num) {
    //我们把输入的number转化为二进制，然后在分割为数组
    const binary = num.toString(2).split('');
    let max = 0;
    //last是用来存放上一个匹配的下标的，所以默认是-1，方便我们根据是否是第一次匹配到作出相应的操作
    let last = -1;
    //把这个数组中值为1的项，保存他的key
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
        //last在最初是-1，如果大于零说明不是第一次出现1，可以做差值了
        if (last >= 0) {
          //last大于零表示已经保存了一个下标的值，可以取差值然后和max比较
          max = Math.max(max, i - last);
        }
        else {
          //第一次匹配到max、设置为0，这样如果到最后也只有一个的话会输出0
          max = 0;
        }
        //在第一次出现1后last就被设置为下标i,这样last就有了下标，可以进行上面的计算
        last = i;
      }
    }
    return max
  }

  console.log(oneToOne(5));
  console.log(oneToOne2(22));
}

