{
  actions = {
    attack: function () {
      console.log('attack');
    },
    defence: function () {
      console.log('defence');
    },
    jump: function () {
      console.log('jump');
    },
  }

//通过操作命令对象集合的方式，有java中接口的效果，以后actions中的方法发生了改变，调用者依然不用改变自己的调用方式，还方便自己给这些方法额外加工
  function getCommand(actions) {
    this.hisList = [];
    this.doAction = (action) => {
      actions[action]();
      this.hisList.push(actions[action]);
    };
    //返回经过加工的从actions这个集合中取出的方法
    //会把执行的方法存在闭包中的历史数组（因为js方法是可以作为参数被传递的）
    return {
      attack: () => this.doAction('attack'),
      jump: () => this.doAction('jump'),
      defence: () => this.doAction('defence'),
      //执行比包中保存的历史信息
      reView: () =>
          this.hisList.map((fn) => {
            fn();
          })
    }
  }

  const myCommmand = getCommand(actions);
  myCommmand.defence();
  myCommmand.jump();
  myCommmand.reView();
}
{
  //因为是在具体方法中调用触发下一个方法的函数，需要在命令集合以外的地方存储命令，所以使用订阅模式全局存储方法列表
  const event = (function () {
    const list = {};
    const listen = (type, fn) => {
      if (!list[type])
        list[type] = []
      list[type].push(fn)
      console.log('插入成功');
    };
    const fliter = (type) => {
      if (list[type].length === 0) {
        console.log('list是空的，不执行fliter');
        return
      }
      const f = list[type].shift();   //每次取出第一个方法
      f();
    };
    const onlyOne = type =>
        list[type].length === 1;
    //异步函数中执行完毕会调用这个方法，把队列中的第一个方法去掉，然后再触发订阅模式的触发方法

    return {
      listen, fliter, onlyOne
    }
  })();
  //具体的操作放在一个对象里面
  //还有一个思路是say方法返回一个primose对象，然后再加上触发订阅事件的代码
  const actions = {
    say: text => {
      setTimeout(() => {
        console.log(text);
        event.fliter('say');
      }, 1000);
    }
  };
  //从操作的集合对象中取出函数，加入订阅模式的队列中去，如果队列只有一个数据，直接触发订阅模式的触发方法
  const getCommand = (actions) => {
    function start(type) {
      event.fliter(type)
    }
    const say = text => {
      // actions.say();
      event.listen('say', () => {
        actions.say(text)
      });
      // if (event.onlyOne('say')) {
      //   console.log('只有一个，所以立即执行');
      //   event.fliter('say')
      // }
    };
    return {
      say,start
    }
  };
  //目标效果是瞬间三个命令请求，然后等他们排队执行
  //我们这里的命令模式是为了在指定命令的时候可以有额外的功能，比如这里同时输入了三个异步命令，他们会排队进行
  //我们在命令对象中把具体的命令用event触发器进行了操作，达到效果
  const myCommend = getCommand(actions);
  myCommend.say(111);
  myCommend.say(222);
  myCommend.say(333);
  //手动开启第一次触发
  myCommend.start('say')
}

