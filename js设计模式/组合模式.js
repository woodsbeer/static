{
  //作为原型的虚拟类，为子类提供一些方法和变量
  class abFile {
    constructor(name) {
      this.name = name;
      this.list = [];
      this.parent = null;
    }

    remove() {
      //是根元素或者还没有被加入到文件夹
      if (!this.parent) {
        return
      }
      let files = this.parent.list;
      for (let i = 0; i <= files.length; i++) {
        if (files[i] === this) {
          files.splice(i, 1)
        }
      }
    }

    add(file) {
      file.parent = this;
      this.list.push(file);
    }

    write() {
      console.log(this.name);
    }
  }

  class Folder extends abFile {
    constructor(name) {
      super(...arguments);
    }

    write() {
      console.log(this.name);
      for (let v of this.list) {
        v.write();
      }
    }
  }

  class File extends abFile {
    constructor(name) {
      super(...arguments);
    }

    add() {
      throw new Error('error')
    }

  }

  const root = new Folder('root');
  const imgs = new Folder('imgs');
  const img1 = new File('img1');
  const img2 = new File('img2');

  imgs.add(img1);
  imgs.add(img2);
  img1.remove();
  const book = new File('book');
  root.add(imgs);
  root.add(book);
  root.write();
}

