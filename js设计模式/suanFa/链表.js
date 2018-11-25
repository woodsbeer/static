{
  function nodeList() {
    this.head = new node('head');

    this.find = element => {
      let current = this.head;
      while (current.element !== element) {
        current = current.next;
      }
      return current;
    };
    this.insert = (element, item) => {
      let current = this.find(item);
      const newNode = new node(element);
      newNode.next = current.next;
      current.next = newNode;

    }
    this.frontElement = element => {
      let curent = this.head;
      while (curent.next && curent.next.element !== element) {
        curent = curent.next
      }
      return curent;
    }
    this.delete = (element) => {
      let front = this.frontElement(element);
      const  newNode = new node(element);
      front.next = front.next.next;
    }
    this.show = () => {
      let eles = [];
      let current = this.head;
      while (current.next) {
//先获取next，避免打印出head
        current = current.next;
        eles.push(current.element);
      }
      return eles;
    }

  }

  function node(element) {
    this.element = element;
    this.next = null;
  }

  let list = new nodeList();
  list.insert('a', 'head');
  list.insert('b', 'a');
  list.insert('c', 'b');
  console.log(list.show());
  list.insert('1', 'b');
  list.delete('b');
  console.log(list.show());
}

