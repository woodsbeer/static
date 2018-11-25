function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

function Node(val) {
  this.val = val;
  this.next = null
}

//递归比较两个二叉树的节点的时候，如果比较当前的两个节点值不一样就返回false，然后如果当前一样返回true不就直接返回没法比较下面的子节点了吗？
//所以我们在判断两个值不同返回false之后，直接比较子节点，如果最底层的两个子节点都为null，就一层一层返回true，否侧就是别的情况，返回false
//简而言之就是在一直当前相等的情况下不返回false，而是让子节点的递归一层一层的返回上来
{

  //比较两个二叉树是否完全相等
  //递归的方式，对于双方的每一个节点先比较节点自身的值是否一样，如过不一样直接返回false，也就不用比较他们的子节点了
  //对于子节点也是一样的递归调用，左节点比较完从最里面的循环继续比较右节点
  function treeSame(t1, t2) {
    if (t1 === null && t2 === null)
      return true
    if (t1 === null || t2 === null)
      return false
    if (t1.val !== t2.val)
      return false
    return treeSame(t1.left, t2.left) && treeSame(t1.right, t2.right)
  }

  const tree1 = new Tree(5)
  tree1.left = new Tree(1);
  tree1.right = new Tree(10);
  tree1.left.right = new Tree(2);
  const tree2 = new Tree(5)
  tree2.left = new Tree(1);
  tree2.right = new Tree(10);
  tree2.left.right = new Tree(2)
  console.log(treeSame(tree1, tree2));
}

{
  //题干
  //给定一个二叉树，检查它是否是镜像对称的。
  //我们判断是不是镜像对称的方法是每次检查对应的两个子节点，他们的值相等的话在依次判断他们的左右子节点是否相等
  //但是因为是镜像堆成所以一开始的根元素的左右子节点一定对称，但是他们的子节点的子节点，那就要左右颠倒
  //当前其中一个节点的左子树对应另一个节点的右子树
  const isSymmetric = function (root) {
    if (!root) {
      return false;
    }
    return lAr(root.left, root.right)

    function lAr(l, r) {
      //如果两个都不存在
      if (!l && !r)
        return true;
      // 如果只有一个不存在
      if (!r || !l)
        return false
      if (r.val !== l.val)
        return false
      return lAr(r.left, l.right) && lAr(r.right, l.left)
    }
  };
  const tree3 = new Tree(5);
  tree3.left = new Tree(12);
  tree3.right = new Tree(12);
  tree3.left.right = new Tree(9);
  tree3.right.left = new Tree(9);
  console.log(isSymmetric(tree3));
}

{
  //给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
  //
  // 示例 1:
  //
  // 输入: 1->1->2
  // 输出: 1->2
  // 示例 2:

//用一个存储列表保存出现过的值，如果indexOf不是-1表示重复了， n.next = n.next.next;

  function liebiaoQuchong(node) {
    let cabel = [];
    // 我们自定义一个空的node用来遍历，因为遍历是从第一个的next开始的,
    //这样赋值以后我们修改n的同时也会修改node,因为指向同一个内存,修改的是同一个对象
    let n = new Node(0);
    n.next = node;
    while (n && n.next) {
      let val = n.next.val;
      if (cabel.indexOf(val) < 0) {
        cabel.push(val)

      }
      else {
        n.next = n.next.next;
      }
      n = n.next;
    }
    return node;
  }

  const node = new Node(1);
  node.next = new Node(2);
  node.next.next = new Node(3);
  node.next.next.next = new Node(3);
  node.next.next.next.next = new Node(4);
  console.log(liebiaoQuchong(node));
}
{
  //这道题让我们在一个有序整数数组中寻找相同目标值的起始和结束位置,没如果没有找到就返回[-1,-1]

  //我们用二分法，但是一般的二分法是最后找到一个符合要求的数（也就是start<end循环到最后得到mid）
  //我们这次要获取所有可能的值，在第一次循环得到指定值的最左边的index，所以只要arr[mid]不是比目标值小就让二分法往晓得方向移动
  //移动j之后再判断是不是取得目标值如果是就先存着，在下一个循环中继续找，如果又找到就覆盖
  //总之就是先确定还是会进入下一个循环然后在存储当前mid
  let arr1 = [1, 1, 2, 2, 3, 4, 4, 7, 8];
  let arr = [5, 7, 7, 8, 8, 8, 8, 10],
      target = 8;
  let searchRange = function (arr, target) {
    let j = arr.length - 1;
    let i = 0;
    let res = [-1, -1];
    ///注意这里，如果是<=，每次i = mid+1（因为 mid = Math.floor((i + j) / 2) ，mid是往下取整的，所以在变化的时候让他小的边界变大，否则在极限的情况下mid不会变化，
    // 比如（0，1，2）mid是1，想要找到2，i必须是mid+1，不然mid = （1+2）/2 = 1，还是原来的那个mid）
    //如果是i <j，j在变化的时候就是j = mid，因为在极限的情况下j-1会取不到最近的j，（因为mid向下取整，所以我们尽可能让他变化的时候变大不变小）
    //取不到j最近的mid就必须要让i加到和j相等在然他们相加取mid，如果我们这里i<j,所以取不到i=j，就不能让j = mid-1
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (arr[mid] < target) {
        i = mid + 1;
      }
      else {
        j = mid - 1;
        if (arr[mid] === target) {
          res[0] = mid
        }
      }
    }
    i = 0;
    j = arr.length - 1;
    while (i <= j) {
      let mid = Math.floor((i + j) / 2);
      if (arr[mid] > target) {
        j = mid - 1;
      }
      else {
        i = mid + 1;
        if (arr[mid] === target) {
          res[1] = mid
        }
      }
    }
    return res
  }
  console.log(searchRange(arr, target)); // [3, 4]


}
{
  //返回目标的位置或者应该插入的位置

  //就是直接用二分法，如果匹配就返回，但最后也不匹配的话，那个最后的mid一定比小于目标的的数的下标大
  // （因为我们判断的时候是先判断小让他i = mid+），所以一定会大于比目标小的数
  function getIndexOrWhereToInsert(arr, t) {
    let i = 0, j = arr.length - 1;
    let mid;
    while (i <= j) {
      mid = Math.floor((i + j) / 2);
      if (arr[mid] < t) {
        i = mid + 1
      }
      else if (arr[mid] > t) {
        j = mid - 1
      }
      else
        return mid;
    }
    return mid;
  }

  console.log(getIndexOrWhereToInsert([1, 2, 5], 4));
}

