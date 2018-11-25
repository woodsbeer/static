function f() {
    try {
        let i =1/0;
        console.log(i);
        throw new Error('this is error')
    }catch (e) {
        console.log(e.stack);    //这加不加stack是一样的，输出 this is error和报错的行数
    }
    console.log('end');  //错误被上面捕获，这里正常输出
}
f()