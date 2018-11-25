function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

{
//题干 把二叉树根据层数分类放到一个更大的数组中去

  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */


  let levelOrder = function (root) {
    if (root === null || root.length === 0) {
      return [];
    }

    // 使用map[level]的list儲存相同level節點的值
    let map = {};

    // 待處理節點的等待陣列，第一個要處理的當然就是root
    let waitlist = [{level: 0, node: root}];

    // 處理到沒有待處理
    while (waitlist.length > 0) {

      // 取出waitlist最後一個node來處理
      let cur = waitlist.pop();
      let node = cur.node;

      // 如果當前node沒有其他同level的node，產生一個該level的list來裝
      if (!map[cur.level]) {
        map[cur.level] = [node.val];
      } else {
        map[cur.level].push(node.val);
      }

      // 有子節點放入待處理清單，注意right要先放，因為上面是抓最後一個放入的節點處理，left後放才會被先處理
      if (node.right) {
        waitlist.push({level: cur.level + 1, node: node.right});
      }

      if (node.left) {
        waitlist.push({level: cur.level + 1, node: node.left});
      }

    }
    let result = [];

    for (let i in map) {
      result.push(map[i]);
    }

    return result;
  };
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  console.log(levelOrder(root));

}
{
//要从一个二叉树中把节点的值根据层数进行排列的话，就要有两个存储的对象
//一个是array存放节点的，从根节点开始，存放层数和节点内容；通过while检测到里面有节点就会分析里面的节点，继续跟新下一层节点的层数和内容
//另一个是cabel在分析节点列表的时候把里面的层数作为key，内容作为value放入对应的列表
//最后遍历这个cabel取出里面的值就行了
  function levelOrder1(node) {
    const cabel = {};
    if (!node) {
      return []
    }
    let array = [];
    array.push({level: 0, node});
    while (array.length > 0) {
      let last = array.pop();
      let nowLevel = last.level;
      let nowNode = last.node;
      if (!cabel[nowLevel]) {
        cabel[nowLevel] = []
      }
      cabel[nowLevel].push(nowNode.val);
      //这里注意先加入右子树到存储的数组，因为从这个数组取值是反过来取的
      //这样的话，无论什么情况下同一个层数的节点都是先把左边的先被放到cabel对象的对应数组中去
      if (nowNode.right) {
        array.push({level: nowLevel + 1, node: nowNode.right})
      }
      if (nowNode.left) {
        array.push({level: nowLevel + 1, node: nowNode.left})
      }
    }
    const res = [];
    for (const key in cabel) {
      res.push(cabel[key])
    }
    return res;
  }

  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  console.log(levelOrder1(root));

}
{

  let lowestCommonAncestor = function (root, p, q) {
    let count = 0;

    while (true) {
      let value = root.val;

      if (p.val >= value && value >= q.val || p.val <= value && value <= q.val) {
        return root;
      } else if (p.val > value && q.val > value) {
        root = root.right;
      } else {
        root = root.left;
      }
    }
  };
//题干 找到两个子节点的最小父节点
  //思路  因为二叉树的排列规则是父节点的大小是两边的子节点的中间范围
  //所以我们去比较他们的大小就可以了
  function lowestCommonAncestor1(root, q, p) {
    //只要找到的子节点就无限循环
    while (root) {
      if (root.val >= p.val && root.val <= q.val || root.val <= p.val && root.val >= q.val) {
        return root
      }
      else {
        if (root.val > q.val && root.val > p.val) {
          root = root.left;
        }
        else {
          root = root.right;
        }
      }
    }
    //在某一方向的子节点为null就是找不到了，会跳出while循环
    return 'no'
  }

  const root = new TreeNode(6);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(0);
  root.right = new TreeNode(8);
  console.log(lowestCommonAncestor1(root, new TreeNode(555), new TreeNode(5555)));
}

