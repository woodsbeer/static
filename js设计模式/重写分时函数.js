function fenshi(arr, fn, count, time) {
    let interval;
    const doItem = () => {
        const oneListLength = Math.min(count || 1, array.length);
        for (let i = 0; i < oneListLength; i++) {
            const one = arr.shift();
            fn(one)
        }
        console.log('.');
    }
    return function () {
        interval = setInterval(() => {
            if (arr.length <= 0) {
                clearInterval(interval)
            } else {
                doItem()
            }

        }, time)

    }
}

const array = [];
for (let i = 0; i < 20; i++) {
    array.push(i)
}

function doSomeThing(item) {
    console.log(item);
}

const thunkFun = fenshi(array, doSomeThing, 3, 200);
thunkFun()



