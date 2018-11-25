//接口，一般用来限制方法的参数类型
interface man {
  name: string,
  age: number
}
//一个类，根据构造函数生成拥有固定类型的对象
class Person {
  name: string
  ;
  age: number
  ;

  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}
//用一个接口来统一表示需要哪些参数
function greeter(person: man) {
  return person.name;
}

let user = {name: 'jojo!', age: 17};

//这里的getter是用接口定义好参数类型的，所以我们要得到一个对象，可以用实例化一个class，或者一个已经定义好的类
console.log(greeter(new Person(15, 'dio!')));;
console.log(greeter(user));;

