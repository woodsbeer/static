{
  //总结就是通过高阶函数来实现免息那个对象的继承/好莱坞模式（因为js中方法可以是参数和返回值）
  //根据好莱坞模式，上级安排下级工作，所以我们这个方法根据一个参数类来获取子类的重写方法，然后返回一个利用子类具体操作的方法
  //所以子类就是写具体干的事情，然后父类通过参数接受这个子类，根据实际情况安排怎么做(在那个返回的方法里面)
  function Beverage(param) {
    const boilwater = function () {
      console.log('烧水');
    }
    const brew = param.brew || function () {
      throw new Error('no brew')
    }
    const pourInCup = param.pourInCup || function () {
      throw new Error('no pour in cup')
    }
    const needCondiment = param.needCondiment || function () {
      return true
    }
    const addCondiment = param.addCondoment || function () {
      throw new Error('no add condiment')
    }
    return {
      //根据实际情况安排具体的操作
      start() {
        boilwater();
        brew();
        pourInCup();
        if (needCondiment()) {
          addCondiment()
        }
      }
    }
  }

//子类，作为参数把代码传进父类
  const tea = Beverage({

    brew() {
      console.log('泡茶');
    },
    pourInCup() {
      console.log('倒茶');
    },
    needCondiment() {
      return false
    },
    addCondoment() {
      console.log('加类柠檬片');
    }

  });
  tea.start();


}

