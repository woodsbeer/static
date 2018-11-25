function stack() {
  let list = [];
  const push = item => {
    list.push(item)
  };
  const pop = () =>
    list.pop();

  const empty = () => {
    list = [];
  };
  const print = () => {
    console.log(list);
  };
  const isEmpty = () => {
    return list.length === 0;
  }
  return {
    push, pop, empty, print, isEmpty
  }
}

function zhuanhuanJinzhi(baseNum, base) {
  const myStack = stack();
 const digits = '0123456789ABCDEF';
  let baseString = '';
  let rem = 0;  //remain 余数
  while (baseNum > 0) {
    rem = Math.floor(baseNum % base);
    myStack.push(rem);
    baseNum = Math.floor(baseNum / base);
  }
  while (!myStack.isEmpty()) {
    //可以从string中根据index取出相应的值
    baseString += digits[myStack.pop()]
  }
  return baseString;
}

console.log(zhuanhuanJinzhi(9, 2));

