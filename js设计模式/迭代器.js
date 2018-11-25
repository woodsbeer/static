//自己写的map方法
Object.prototype.fakeeach = function (callback) {
  //获取调用map的数组
  const arr = this;
  //返回的数组
  let out = [];
  for (let a of arr) {
    out.push(callback.call(a, a));
  }
  return out;
}

const array = [
  {id: 1, text: 'dsd'},
  {id: 12, text: 'dsfdsd'},
  {id: 13, text: 'ddsfsd'},
  {id: 14, text: 'ddsfrrewsd'},

];


console.log(array.fakeeach(item =>
    item.text + 'nnn'
));


const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 5, 4]

//外部迭代器
{
  //一个自定义的迭代器，可以迭代和输出传入的数组，上面的那个自定义each函数只能在内部自己处理，除了传入的函数没有自由度
  function Iterator(list) {
    let current = 0;
    const next = () => {
      current++;
    }
    const isEnd = () => {
      return current >= list.length;
    }
    const getCurrentItem = () => {
      return list[current];
    }
    return {
      isEnd, current, getCurrentItem, next
    }
  }

  const compare = (iterator1, iterator2) => {
    if (iterator1.length !== iterator2.length) {
      return false;
    }
    while (!iterator1.isEnd() && !iterator2.isEnd()) {
      if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
        return false
      }
      iterator1.next();
      iterator2.next();
    }
    return true;
  };
  const iterator1 = Iterator(arr1);
  const iterator2 = Iterator(arr2);
  console.log(compare(iterator1, iterator2));
}
//jquery的each方法
{
  function jqeach(obj, callback) {
    let i = 0, value, isArray = Array.isArray(obj);
    if (isArray) {
      for (; i < obj.length; i++) {
        if (callback.call(obj[i], i, obj[i]) === false) {
          //break和return false都可以
          break;
        }
      }
    }
    else {
      for (i in obj) {
        if (callback.call(obj[i], i, obj[i]) === false) {
          break
        }
      }
    }
  }

  let arr3 = {
    aa: 1,
    bb: 'ffd'
  }
  jqeach(arr3, (i, value) => {
    console.log(i, value); //遍历打印对象的时候因为上面设置了Object.prototype.fakeeach，所以会打印出属于_propto_的这个方法
    //但是在bb的时候返回了false，所以
    if (i==='bb') {
      return false
    }
  })
}

