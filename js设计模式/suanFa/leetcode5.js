{
  //题干
  //给定两个大小相等的数组 A 和 B，A 相对于 B 的优势可以用满足 A[i] > B[i] 的索引 i 的数目来描述。
  //
  // 返回 A 的任意排列，使其相对于 B 的优势最大化。
  //输入：A = [2,7,11,15], B = [1,10,4,11]
  // 输出：[2,11,7,15]
  // 示例 2：
  // 
  // 输入：A = [12,24,8,32], B = [13,25,32,11]
  // 输出：[24,32,8,12]
  function compare(a, b) {
    return a - b;
  }

  //我们的思路是把两个数组排序存储起来，然后设置一个数组放A中符合的字符，再一个数组放无法匹配时A中最小的一项（因为大的要用来和别的B比较）
  //那个符合的数组默认是空的，我们每次按照被匹配的B字符在B中的位置把匹配上的A放进去，
  //循环完毕后我们再去遍历装载符合字符的数组，其中空的选项就是找不到匹配项，我们从remain中把那些匹配不到的扔一个进去
  function adventageCount(A, B) {
    const sortA = A.sort(compare);
    const sortB = B.sort(compare);
    let remain = [];
    let assign = new Array(B.length);
    let res = [];
    for (let sortBElement of sortB) {
      for (let sortAElement of sortA) {
        if (sortAElement > sortBElement) {
          assign[B.indexOf(sortBElement)] = sortAElement;
          sortA.splice(sortA.indexOf(sortAElement), 1)
          break
        }
      }
      remain.push(sortA.shift());
    }
    for (let assignElement of assign) {
      if (assignElement)
        res.push(assignElement)
      else
        res.push(remain.shift())
    }
    return res;
  }

  function adventageCountChongxie(arr1, arr2) {
    let remain = [];
    let sortA = arr1.sort(compare);
    let resA = new Array(arr1.length);
    for (let j = 0; j < arr2.length; j++) {
      for (let i = 0; i < sortA.length; i++) {
        if (sortA[i] > arr2[j]) {
          resA[arr2.indexOf(arr2[j])] = sortA.splice(i, 1)[0];
          //跳出次级循环，外部循环+1
          // break;
          j++
        }
      }
      //一次次级循环结束，还没有匹配到并break
      remain.push(sortA.shift());
    }
    //for of 遍历数组的时候对element直接修改是不会更新源数组的，只能for循环通过下标更新
    for (let i = 0; i < resA.length; i++) {
      if (!resA[i]) {
        resA[i] = remain.shift();
      }
    }
    return resA
  }

  console.log(adventageCount([2, 7, 11, 15], [1, 10, 4, 11]));
  console.log(adventageCountChongxie([2, 7, 11, 15], [1, 10, 4, 11]));
}

{
  //判断两个字符串是否倒转后相等
  function reverseSame(t1, t2) {
    let tt = t1.split('').reverse().join('');  //join 把数组组成字符串，分割的部分用参数填充
    return tt === t2;
  }

  console.log(reverseSame('aq', 'qa'));
}

{
  //返回与给定的前序和后序遍历匹配的任何二叉树。
  //
  //  pre 和 post 遍历中的值是不同的正整数。
  //输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
  // 输出：[1,2,3,4,5,6,7]

  function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  /**
   * @param {number[]} pre
   * @param {number[]} post
   * @return {TreeNode}
   */
  const constructFromPrePost = function (pre, post) {
    const length = pre.length;
    const root = new TreeNode(pre[0]);
    if (length === 0) return null
    if (length === 1)
      return root;
    //L是左子树的节点个数
    let L = 0;
    //左边子树的根节点是他的先序的1，也是他的后续的N-1 pre(1) = post(N-1) => N = 1+post.indexOf(pre(1))
    const target = pre[1];
    L = 1 + post.indexOf(target);
    //splice的第二个参数是获取数组的跨度，而非end下标
    root.left = constructFromPrePost(pre.splice(1, L), post.splice(0, L));
    //这里有一个大bug，上面splice可以返回被修改以后的数组，但是数组本身也已经被修改了，如果没有深拷贝的备份，我们接下来操作的数组是修改以后的
    //还有一个注意，先序遍历是根节点右子树中夹着左子树，所以上面取出左子树后，还要跳过第一个根节点才是左子树，，但是后序遍历不用，直接从0开始
    root.right = constructFromPrePost(pre.splice(1, length - 1 - L), post.splice(0, length - L - 1));
    return root;
  };
  console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
}

{
  //题干 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
  // 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
  //以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
  // 1,2,3 → 1,3,2
  // 3,2,1 → 1,2,3
  // 1,1,5 → 1,5,1

  //思路
  //我们要得到一个比当前数组稍微大一点的数组，也就是从地位开始找，所以我们从后往前遍历
  //我们要找到第一个前面的数字小于后面的数字这样的情况，然后找到比前面的那个小的数稍微大一点的数字，调换位置
  //因为后面的数字在一开始可能是降序的，我们在交换了高位数字的顺序后应该把地位的数字变成升序，保证整体数组在比原来的数组大的同事尽可能的小
  function nextPermutation(arr) {
    const length = arr.length;
    let i = length - 2;
    while (i >= 0 && arr[i] > arr[i + 1]) {
      i--;
    }
    if (i >= 0) {
      let j = length - 1;
      while (j >= i && arr[j] <= arr[i]) {
        j--
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];

    }
    return reverse(arr, i + 1)
  }

  function reverse(arr, start) {
    //保存splice取出的那部分数组
    let part = arr.splice(start);
    //arr是splice取出后剩下的数组
    return arr.concat(part.reverse());
  }

  console.log(nextPermutation([1, 5, 1]));
}

{
  function nextPermutationChongxie(arr) {
    const length = arr.length;
    let i = length - 2;
    while (arr[i] > arr[i + 1]) {
      i--
    }
    if (i >= 0) {
      let j = i + 1;
      while (arr[j] > arr[i]) {
        j++
      }
      [arr[j - 1], arr[i]] = [arr[i], arr[j - 1]];
     return sortFromI(arr,i);
    }
  }

  function sortFromI(arr, i) {
      const part = arr.splice(arr,i);
      return arr.concat(part.sort())
  }
  console.log(nextPermutationChongxie([1, 5, 1]));
}

