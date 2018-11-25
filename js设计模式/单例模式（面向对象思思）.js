{
  class man {
    constructor() {
      this.instance = ''
    };

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      return this.instance = new man();
    }

    say() {
      console.log('哈哈哈我是dio哒');
    }
  }

  let man1 = man.getInstance();
  let man2 = man.getInstance();
  console.log(man1 === man2);
}
{
  class dog {
    constructor() {

    }

    say() {
      console.log('woshigou');
    }
  }

  //代理单例模式，即使类不是单例的，我们把它传到一个单例的方法（通过闭包保存instance对象），然后得到一个单例的对象
  //不过这个代理方法的使用是一次性的，绑定类一个类就不能绑定别的累了
  let proxyDanli = (function () {
    let instance = '';
    //以为这个方法是自执行，所以instance一开始就被定义好，始终只有这一个instance
    return function (obj) {
      if (instance) {
        return instance;
      }
      return instance = new obj();
    }
  })()
  const a1 = proxyDanli(dog);
  const a2 = proxyDanli(dog);
  a1.say();
  console.log(a1 === a2);
}

