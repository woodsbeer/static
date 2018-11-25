{
    class Animal {
        constructor(color, name, hobit = 'eat') {
            this.color = color;
            this.name = name;
            this.hobit = hobit;
        };


        static getLong() {
            console.log(this.staticLong);
        }
    }

    class Dog extends Animal {
        constructor(color, name) {
            super(color, name);   //habit不用再次声明，已经继承好了
            this.type = 'dog';
        }

        say() {
            this.type='bird';
            console.log('i am', this.type);
            console.log('i like', this.hobit);
            console.log('name=', this.name);
        }

        set setColor(newcolor) {
            this.color = newcolor;
        }

        get getColor() {
            return 'get前缀' + this.color
        }
    }

    let dog = new Dog('white', 'godOne');
    dog.say();
    dog.setColor = 'red';  //设置成功
    dog.color = 'blue'; //覆盖成功
    console.log(dog.getColor);
    Dog.staticLong = 18;  //增加静态属性
    Dog.getLong(); //调用静态方法
}
{
    //es5的原型链
    function animal() {
        this.type = "animal";
        this.name = 'animalName';
    }

    animal.prototype.getType = function () {
        return this.type;
    };

    function dog() {
        this.name = "dog";
    }

    dog.prototype = new animal();

    dog.prototype.getName = function () {
        return this.name;
    };

    let xiaohuang = new dog();
    let xiaodongwu = new animal();
    console.log(xiaohuang.getName());
    console.log(dog.prototype);
    console.log(animal.toLocaleString()); //animal没有变
}
{
    /**
     * es5中的原型继承
     *
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.say = function () {
            console.log('helow , iaam person');
        }

    }

    Person.prototype.run = function () {
        console.log('i am Person property,i am running!');

    }

    function jojo(name, age) {
        Person.call(this,name,age);
        //对象冒充实现继承，在jojo里面实现Person的构造函数，或者说调用Person的构造函数给jojo进行赋值，
        //可以获得Person的参数和方法
    }
    jojo.prototype =new Person;  //原型链继承，可以使用原型链上的方法了
    let jojo1 = new jojo('Joseph',18);
    jojo1.say();
    jojo1.run();

}