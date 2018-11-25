{
  //给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
  //
  // 示例:
  //
  // 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
  // 输出:
  // [
  //   ["ate","eat","tea"],
  //   ["nat","tan"],
  //   ["bat"]
  // ]
  //
  function groupAnagrams() {
    let arrObj = {};
    let res = [];
    //在闭包中存储分组
    return function (arr) {
      for (let arrElement of arr) {
        if (!arrObj[getSort(arrElement)]) {
          arrObj[getSort(arrElement)] = [];
        }
        arrObj[getSort(arrElement)].push(arrElement);
      }
      for (let arrObjKey in arrObj) {
        res.push(arrObj[arrObjKey]);
      }
      return res;
    }
  }

//我们通过这个方法获取每一个字符串排序后的值，以此作为判定同组的依据
  function getSort(str) {
    //使用数组的排序方法
    return str.split('').sort().join('');
  }

  const myGroupAnagrams = groupAnagrams();
  console.log(myGroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
}
{  //返回数组中除去指定选项后剩下的数组长度
  //给定 nums = [0,1,2,2,3,0,4,2], val = 2,
  //
  // 函数应该返回新的长度 5,
  /**
   * @return {number}  新数组的长度
   * @param numbs
   * @param val
   */
  const removeElement = function (numbs, val) {
    return numbs.filter(value =>
        value !== val
    ).length
  };
  //其实不用得到筛选后的字符串，我们在遍历的时候直接累加就行
  const removeElement1 = function (numbs, val) {
    let res = 0;
    for (const numb of numbs) {
      if (numb !== val)
        res++;
    }
    return res;
  }
  console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
  console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2));
}

{
  //给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
  //
  // 示例：
  //
  // 给定一个链表: 1->2->3->4->5, 和 n = 2.
  //
  // 当删除了倒数第二个节点后，链表变为 1->2->3->5.
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  const removeNthFromEnd = function (head, n) {

    let keyNode = head;
    let length = 0;
    //获取链表的长度
    while (keyNode) {
      length++;
      keyNode = keyNode.next;
    }
    //把长度变成取到应该被替换的那个节点的前一个
    length -= n;
    // keyNode设置为头部节点
    keyNode = head;
    for (let i = 0; i < length - 1; i++) {
      keyNode = keyNode.next;
    }
    keyNode.next = keyNode.next.next;
    return head;
  };

  function removeNthFromEnd1(head, n) {
    //双指针
    let slow = head;
    let fast = head;
    //然后快的指针先走，事先拉开距离
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    //快的指针到末尾的时候慢的那个应该在末尾前面固定的距离
    while(fast.next){
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
  }

  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  let head1 = {...head};
  //深克隆，元对象被修改也不会受影响
  head1 = JSON.parse(JSON.stringify(head1));
  console.log(removeNthFromEnd(head, 2));
  console.log(removeNthFromEnd1(head1, 2));


}

