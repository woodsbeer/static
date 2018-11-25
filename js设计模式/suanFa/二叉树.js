{
  function font(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  };

  function tree() {
    this.root = null;
    this.insert = data => {
      const myFont = new font(data);
      if (!this.root) {
        this.root = myFont;
      }
      else {
        let corrent = this.root;
        let parent;
        //如果current节点仍然有值
        while (corrent) {
          parent = corrent;

          if (data < corrent.data) {
            corrent = parent.left;
            //如果current节点没有值
            if (!corrent) {
              parent.left = myFont;
              break;
            }
          }
          else if (data > corrent.data) {
            corrent = corrent.right;
            if (!corrent) {
              parent.right = myFont;
              break;
            }
          }
        }
      }
    }
    this.show = () => this;
    this.find = item => {
      if (item === undefined) {
        return
      }
      let current = this.root;
      while (true) {
        if (current.data === item) {
          return current;
        }
        current = item < current.data ? current.left : current.right;
        if (current === null) {
          return null;
        }
      }
    }
    //中序遍历
    this.midBoianli = data => {

      while (this.find(data)) {
        let node = this.find(data);
        console.log(node.data);
        if (node.left)
          this.midBoianli(node.left.data);
        if (node.right)
          this.midBoianli(node.right.data);
        break;
      }

    }
    //前序遍历
    //只要有左节点永远优先向那个左节点递归，在最底层的左节点发现没有做节点了，操作当前节点
    this.preBoianli = data => {
      let node = this.find(data);
      while (node) {
        if (node.left)   //防止空指针的判断,这样下个循环进行find（）不会出错
          this.preBoianli(node.left.data);
        console.log(node.data);
        if (node.right)
          this.preBoianli(node.right.data);
        break;  //右节点也操作完毕就跳出当前这层递归
      }
    }
  }

  const tree1 = new tree();
  tree1.insert(15);
  tree1.insert(125);
  tree1.insert(16);
  tree1.insert(61);
  tree1.insert(1233);
  console.log(tree1.show(), ',,,,,,,,,');
  console.log(tree1.find(16), 'find');
  tree1.preBoianli(15);
}

