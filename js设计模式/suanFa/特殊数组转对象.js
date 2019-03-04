const arr = [
    {name: 'jojo', a: 'a'},
    {name: 'jojo222', a: 'a'},
    {name: 'jojo33', a: 'c'},
    {name: 'jojo44', a: 'a'},
    {name: 'jojo5', a: 'd'},
]

function arrToObj(arr) {
    let tempA = '';
    let cable = {};
    for (const arrElement of arr) {
        if (!cable[arrElement['a']]) {
            cable[arrElement['a']] = []
        }
        cable[arrElement['a']].push(arrElement)
    }
    return cable;
}
let o = arrToObj(arr);
console.log(o);
