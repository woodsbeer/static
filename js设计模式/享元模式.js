{
  const type1s = [
    {id: 1, name: 'aaa', size: 111},
    {id: 2, name: 'bbbb', size: 144411},
    {id: 3, name: 'ccc', size: 3333},
    {id: 4, name: 'eee', size: 222},
  ];
  const type2s = [
    {id: 11, name: 'AAA', size: 44},
    {id: 12, name: 'BBB', size: 66},
    {id: 13, name: 'CCC', size: 33},
    {id: 14, name: 'DDD', size: 99},
  ];
  //我们的对象，只接受内部状态,以后再manger中会更新他的外部状态重新利用该对象
  const Man = function (type) {
    this.type = type;
  };
  //单例工厂
  const manFactory = (function () {
    let manByType = {};
    return {
      create(type) {
        if (manByType[type])
          return manByType[type];
        return manByType[type] = new Man(type);
      }
    }
  })();
  //对于对象的利用，管理
  const manManger = (function () {
    let database = {};
    return {
      //每次调用他都会把我们的单例对象对应的外部状态存放在db中
      add(type, id, name, size) {
        //获取单例对象
        let man = manFactory.create(type);
        //放进db
        database[id] = {
          name, size
        };
        //使用这个单例对象，在使用的时候会通过db更新里面的外部状态，使用id来获取到对应的数据
        man.say(id);
        return man;
      },
      // 把外部状态从闭包中的db传给单例对象
      serExternalState(id, man) {
        const db = database[id];
        for (let key in db) {
          man[key] = db[key];
        }
      }
    }
  })();
  Man.prototype.say = function (id) {
    //更新外部数据
    manManger.serExternalState(id, this);
    //执行
    console.log('我被更新了，我是' + this.name);
  };

//遍历数据，不断的更新单例对象的外部数据，达到重复利用的效果
  function start(type, mans) {
    for (let man of mans) {
      let res = manManger.add(type, man.id, man.name, man.id);
    }
  }

  start('yellow', type1s);
  start('white', type2s);
  // mansList[0].say();
}
{
  //对象池

  function Man(name) {
    this.name = name;
  }
  //具体的用法是先得到一个唯一的工厂对象，我们通过他的create返方法获取新对象
  //如果对象池里面有对象的话，取出对象
  //一般在那个对象那个中设定一个某个操作的回调函数，我们这里是再创造的时候直接调用一个函数
  //在这个函数里面会调用工厂对象的recover，把对象塞进对象池
  //所以我们不用手动的每次去回收对象
  function objectFactory(fun) {
    //对象池
    let objs = [];
    return {
      create() {
        if (objs.length === 0) {
          console.log('自己造一个');
          return fun.apply(this, arguments);
        }
        console.log('队列中拿一个');
        return objs.shift();
      },
      recover(obj) {
        console.log('放入队列');
        objs.push(obj);
      }
    }
  }
  const myFactory = objectFactory(function () {
    let man1 = new Man('111');
    man1.say = function () {
      console.log(this.name);
      //对象执行完某一个操作后,调用工厂对象的回收方法
      //在对象内部可以调用对象
      myFactory.recover(this);
    };
    //被创造的时候会说话
    man1.say();
    return man1
  })

  let man = myFactory.create()

  let man2 = myFactory.create();

}

