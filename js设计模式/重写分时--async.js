{
    //列表
    const list = [];
    for (let i = 0; i < 20; i++) {
        list.push(i)
    }
    //和list相关的异步方法
    const asyncFun = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${num} is ok`)
        }, Math.random() * 3000)
    })
//把分时函数用在异步方法中，用来限制异步方法的调用，每次一定个数的方法执行完再执行下一批
    function asyncFenshi(list, count, fun) {
        const temp = () => {
            //最少执行个数，如果剩下的不足count的值就执行一个
            const minCount = Math.min(count || 1, list.length);
            const pros = [];
            for (let i = 0; i < minCount; i++) {
                //循环，每次从list中取出第一个，list自行减少
                const num = list.shift();
                const pro = fun(num);
                pros.push(pro);
            }
            //异步方法全部返回
            Promise.all(pros).then( res => {
                for (const re of res) {
                    //对异步方法的返回值进行操作
                    console.log(re);
                }
                //如果list还有剩余，就继续执行下一批
                if (list.length)
                    temp()
                else
                    return
            })
        }

        return function () {
            temp()
        }
    }

    const asGo = asyncFenshi(list, 6, asyncFun);
    asGo()
}
