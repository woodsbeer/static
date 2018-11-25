

{
  function deep(obj) {
    //因为非基本类型拆解到最后一定是基本类型，哪怕最里面的一个属性是a:{},里面的null也可以被放置到deep里面去，最后返回{}给对应的key
    let res;
    console.log(obj.constructor);   //[Function: Array]
    if (typeof obj === "object") {
        res = obj.constructor===Array?[]:{}   //注意这里是直接的Array，没有引号
      for (const key in obj) {
        res[key]=typeof obj[key]==="object"?deep(obj[key]):obj[key]
      }
      return res;
    }
    return res = obj;
  }
let un;
  console.log(deep({a:[1, 5, 6],b:un}));
}
{
  const a1 = {a:1,b:2};
  const aa = JSON.stringify(a1,['a']);   //变成字符串的时候第二个参数是一个数组，里面规定了输出那些

  console.log(JSON.parse(aa));
}

