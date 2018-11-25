{
  //["38:21","33:12","11:22"]  =>
  // {
  //     38:21，
  //     33:12,
  //     11:22
  // }
  function math(arr,obj) {
    return arr.map(val=>{
      const  kv = val.split(':');
      return {
        //计算属性就是把变量通过[]放进key值中
        [kv[0]]:kv[1]
      }
    })
  }

  console.log(math(["38:21", "33:12", "11:22"]));
}

{
  var name= 'nickName'
  var obj = {
    [name]:'王麻子'
  }
  console.log(obj);
}

