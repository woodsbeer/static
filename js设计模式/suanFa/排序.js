// noinspection aegis.code.check.validation.javascript.format
//交换数组中的两个值
const exch = (array, x, y) => {
    [array[x], array[y]] = [array[y], array[x]];
};
const compareInt = (a, b) => {
    //eval会执行里面的代码，把数字从string转化为int
    return eval(a) - eval(b);
};
let array = [2, 5, 6, 7, 2, 8, 2, 6, 1, 22, 65, 16];
//
// //交换数据的一些方式
// {
//   let a = 1;
//   let b = 2;
//   a = [b, b = a][0];
//   console.log(a, b);
//
// //es6的写法
// // [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// //     console.log(a, b, c);  //1 2 [ 3, 4, 5, 6 ]
//   [a, b] = [b, a];
//   console.log(a, b);
// //用变量存储
//   let o = {
//     a: a,
//     b: b
//   }
//   a = o.b, b = o.a;
//   console.log(a, b);
// }
{
    //简单排序
    const simpleSort = (array) => {
        let n = array.length;
        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++)
                if (compareInt(array[j], array[min]) < 0)
                    min = j;
            exch(array, min, i);
        }
        return array;
    };
    console.log(simpleSort(array));
}

{
    //插入排序
    const chaRuSort = (array) => {
        const N = array.length;
        for (let i = 1; i < N; i++) {
            // let j = i;
            // while
//插入排顺序的原理是丛第一二项开始就排序，然后每次排序的时候前面都已经拍好了，只要判断是不是比前面的小，如果大的话就可以直接停下了
            for (let j = i; j > 0 && compareInt(array[j], array[j - 1]) < 0; j--) {
                exch(array, j, j - 1);
            }
        }
        return array;
    }
    console.log(chaRuSort([2, 4, 2, 8, 5, 99, 57]));
}
{
    //冒泡排序
    //每次拍两个，把最大的往后移，一轮的结果就是最大的在后面，每次周期减少一个，如果一轮中一次没改变，那就表示不用排序了
    const maoPaoSort = (array) => {
        let count = 0
        for (let l = array.length; l > 0; l--) {
            //每一次冒泡排序先定义一个为true的标志，这一次冒泡循环结束都没变成false就表示都没换位，已经是排序号的数组了，直接退出
            let next = true;
            count++
            //第一个循环定义边界
            for (let i = 0; i < l - 1; i++) {  //第二个循环定义从0开始每次加一的循环
                if (compareInt(array[i], array[i + 1]) > 0) {
                    exch(array, i, i + 1);
                    next = false;
                }
            }
            if (next === true) {
                console.log(count, 'xunhuanlejici');
                return array;
            }
        }

        return array;
    }
    console.log(maoPaoSort([43, 211, 242, 45, 5543, 3423, 43, 66]));
}
{
    //归并排序
    function sort(arr) {
        const array = new Array(arr.length);   //实现开创一个足够大的空间，在合并的递归中临时存放当次操作的数据，使得我们在递归李米娜不用反复的开创新的内存
        guibingSort(arr, 0, arr.length - 1, array);
    }

    function guibingSort(arr, left, right, array) {
        if (left < right) {         //递归的边界，只要还可以拆就继续拆
            let mid = Math.floor((left + right) / 2);
            guibingSort(arr, left, mid, array)
            guibingSort(arr, mid + 1, right, array)
            merge(arr, left, mid, right, array)    //合并的时候需要当前数组在整个数组中的位置，也就是那两组在整个arr中的范围，还有那个最初开创好的array空间
        }
    }

    function merge(arr, left, mid, right, array) {
        let i = left;
        let j = mid + 1;
        let t = 0;
        while (i <= mid && j <= right) {  //左右两个数组都有空余
            if (arr[i] < arr[j]) {
                array[t++] = arr[i++]     //把两个数组头部相对更小那个放到最后面，这样只有两个数组都是有序才行，因为会递归拆分重组所以这两个都是有序的
            } else {
                array[t++] = arr[j++]
            }
        }
        while (i <= mid) {   //虽然i还有剩余但是j已经没了
            array[t++] = arr[i++]
        }
        while (j <= right) {
            array[t++] = arr[j++];
        }
        t = 0;
        while (left <= right) {
            arr[left++] = array[t++]
        }
    }

    let array = [2, 6, 2, 5, 6, 7];
    sort(array);
    console.log(array, '归并排序');
}
{
    //归并排序重写
    function guibing(arr) {
        let array = new Array(arr.length);
        fenge(arr, 0, arr.length - 1, array);
        return arr
    }

    function fenge(arr, left, right, array) {
        //如果左右都是同一个位置就不分割了
        if (left < right) {
            const mid = Math.trunc((left + right) / 2);
            fenge(arr, left, mid, array);
            fenge(arr, mid + 1, right, array);
            heBing(arr, left, right, mid, array);
        }
    }

    function heBing(arr, left, right, mid, array) {
        let t = 0;
        let l = left, r = mid + 1;
        while (l <= mid && r <= right) {
            if (arr[l] < arr[r]) {
                array[t++] = arr[l];
                l++
            } else {
                array[t++] = arr[r];
                r++;
            }
        }
        while (l <= mid) {
            array[t++] = arr[l];
            l++;
        }
        while (r <= right) {
            array[t++] = arr[r];
            r++;
        }
        //记得这里要把T归零，因为上面赋值的时候让t++了
        t = 0;
        while (left <= right) {
            //从最左边开始，从左到右全部替换为排序的数组
            arr[left++] = array[t++]
        }
    }

    let array = [1, 5, 4, 9, 3];
    console.log(guibing(array));
}
{
    //堆排序
    //把指定的树排序成大根堆(最大的值放在根部)
    function headJust(arr, pos, length) {
        //得到左子节点
        let child = pos * 2 + 1;
        while (child < length) {
            //得到他俩个子节点中最大的一个
            if (child + 1 < length && arr[child + 1] > arr[child]) {
                child++;
            }
            //如果子节点更大，交换
            if (arr[pos] < arr[child]) {
                [arr[pos], arr[child]] = [arr[child], arr[pos]];
                pos = child;
                child = 2 * child + 1;
            } else {
                break  //因为排序是从后往前的，所以一次排序发现正确就不用继续往下排序了，直接结束while
            }
        }
    }

//把array转换成一整个大根堆
    function buildArr(arr) {
        for (let i = arr.length / 2; i >= 0; i--) {
            headJust(arr, i, arr.length);
        }
    }

    function duisort(arr) {
        buildArr(arr)
        let length = arr.length;
        for (let i = length - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            headJust(arr, 0, i);
        }
    }

    let array = [2, 4, 1, 7, 5, 9];
    duisort(array);
    console.log(array);
}
{
    //快速排序
    //　（1）在数据集之中，选择一个元素作为"基准"（pivot）。
    //
    // 　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
    //
    // 　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
    function quickSort(arr) {
        //先判断是否为长度为1
        if (arr.length <= 1)
            return arr;
        //取得数组的中间值
        const mid = Math.trunc((arr.length - 1) / 2);
        let left = [];
        let right = [];
        for (const [index, arrElement,] of arr.entries()) {
            //注意 如果是mid的话就不用判断了，直接进入下一个循环
            if (index === mid)
                continue;
            if (arrElement <= arr[mid]) {
                left.push(arrElement)
            } else {
                right.push(arrElement)
            }
        }
        return quickSort(left).concat(arr[mid]).concat(quickSort(right))

    }

    console.log(quickSort([1, 2, 9, 5, 1]));
}

