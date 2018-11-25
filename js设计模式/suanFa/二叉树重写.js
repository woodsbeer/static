{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  const tree = function () {
    let root = null;
    return {
      insert(data) {
        const newData = new Node(data);
        if (!root) {
          root = newData
        }
        else {
          //一开始把节点的指针移动到根节点，也就是之后首先和根节点对比
          let current = root;
          //无限循环，直到插入成功break
          //因为最后要给当前的current的left或者right属性赋值，所以不能直接while（current），这样在while结束后虽然得到了那个值为null的current，
          //但是没有他的父节点，也不知道他是做还是又
          while (true) {
            let parent = current;
            if (data < parent.data) {
              //把当前指针移动到parent的左节点，如果非空就进入下一个循环，以左节点为比较节点进一步比较
              current = parent.left;
              if (current == null) {
                //如果指向null，把插入值赋值给他
                parent.left = newData;
                //把插入的数据放进去后跳出循环
                break;
              }
            }
            else {
              current = parent.right;
              if (current == null) {
                parent.right = newData;
                break;
              }
            }
          }
        }
      },
      show() {
        console.log(root, 'show');
      },
      find(data) {
        if (!data || !root) {
          return
        }
        //首先把指针指到输入的那个
        let current = root;
        //无限循环，直到找到匹配的current或者找到null
        while (current) {
          if (current.data === data)
            return current
          else {
            //改变current的值，如果非空就去下一循环比较
            current = data < current.data ? current.left : current.right

          }
        }
        return null
      },
      preIter(data) {
        //先找i到指定的节点
        let current = this.find(data);
        if (!current)
          return;
        //左节点存在的话优先递归左节点
        if (current.left)
          this.preIter(current.left.data)
        //左节点都递归完了，从最后一个递归的左杰点，也就是最左的节点开始执行下一行代码，打印自身
        console.log(current.data);
        //然后递归他的右节点
        if (current.right)
          this.preIter(current.right.data)
      }
    }
  };
  const tree1 = tree()
  tree1.insert(5);
  tree1.insert(10);
  tree1.insert(44);
  tree1.insert(2);
  tree1.show();
  tree1.preIter(5)
}

