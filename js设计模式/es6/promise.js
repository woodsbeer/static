{
    function getData(resolve, reject) {
        setTimeout(() => {
            let data = 'i am data';
            if (Math.random() < 0.5) {
                resolve(data);
            }
            else {
                console.log('shibai');
            }
        }, 1500);

    }

    let G = new Promise(getData);
    G.then((data) => {
        console.log(data, "g.then............");
    });

}
{
    async function getDataa() {
        return 'the result of getData';
    }

    async function test() {
        console.log('getData前面');
        let data = await getDataa();
        console.log(data);
        console.log('getData后面');

    }

    test();
}

{
    function getData1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let aa = 'this aa';
                reject('err')
                // resolve(aa + 'aaafter');
                // console.log(resolve.toString());
            }, 1000);
        })
    }

//获取异步函数返回值的两种方法
    async function test1() {
        //方法1
        let data = await getData1();
        console.log(data, ',,,,,,,,,,,');
        //方法2    先获取一步函数的返回值，然后对这个值进行操作,可能必须在异步方法内
        let result = getData1();
        result.then(result => {
            console.log(result, 'thenthenthenthenthenthen');
        }).catch(err => console.log(err))

    }

    test1();
}
{
    async function getSum() {
        return 1;
    }

    async function logsum() {
        let sum = await getSum();
        console.log(sum, 'logsumlogsumlogsumlogsum');
    }

    logsum();
    console.log('在logsum之后调用');
}


{

//错误处理
    //返回一个promise对象共下面的异步接收函数操作
    async function returnPromise() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                resolve(5)
            }, 1500)
        }))
    }

//执行异步函数，操作他返回的promise对象，
    async function checkMyPromiseBigger10() {
        returnPromise().then(res => {
            if (res > 10) {
                return res
            }
            else {
                return Promise.reject(new Error('res<10'))
            }
        })
    }

    (async function asf() {
        //在异步方法中使用await调用上面的方法获取到返回的promise.reject对象
        //如果不使用aaync和await的话会空指针，因为上面的异步方法还没有返回，这里就操作他的返回的undefined对象
        let res = await checkMyPromiseBigger10()
        console.log(res);
        //既然是promise对象，也就可以这样处理了
        // await checkMyPromiseBigger10().catch(err=>console.log(err))

    })()


}