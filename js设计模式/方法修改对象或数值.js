{
    let a = 5;
    let o = {
        age:1

    }
    function add(x) {
        x=656561;
        console.log(x);
    }
    function newObj(obj){
        obj = {}
    }
    //基本类型以及对象的基本类型属性可以被传入方法然后被修改，但是引用类型比如对象不可以，
    // 因为基本类型指向她本身，被作为参数穿进去的和它本身指向
    //同一个数据，引用类型穿进去的是那个内存地址，在方法内被提替换后本来的对象没有影响
    //所有修该一个复制后的对象的参数，元对象也会被修改，他们始终是指向同一个对象的内存地址，公用一个对象
    add(a);
    add(o.age);
    console.log('a, o.age  :'+a, o.age);
    newObj(o);
    console.log('o :'+o.age);
}
{ //把一个对象传入一个方法
    //这个方法里面修改里这个对象的属性，
    //该对象会被修改成功
    //如果在这个方法里面替换这对象，会失败
    //因为引用类型复制一个获取作为参数时，指向的是同一个内存地址，
    //替换的话原来的不受影响，修改的话，他们是公用一个对象数据的所以都会变
    const a = 1
    const foo = (obj, b) => {
        obj.x = 2
        return obj.x + b
    }
    const counter = { x: 1 }
    foo(counter, 2) // => 4
    console.log(counter.x); // => 2
}
{
    let appState = {
        title: {
            text: 'React.js 小书',
            color: 'red',
        },
        content: {
            text: 'React.js 小书内容',
            color: 'blue'
        }
    }
    const oldState = appState;
    appState.title.text = '《React.js 小书》';
    console.log(oldState);// false，其实两个引用指向的是同一个对象，我们却希望它们不同。
}