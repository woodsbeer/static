const json = {
    'q':1,
    'qq':11,
};
const json1 = '[1,2]'
const list =JSON.parse(json1).map(item=>
    item
)
console.log(list);

const ar1 = [[1],2]
const ar2 = 3
//concat是把作为参数的数组解开然后合并
console.log(Array.prototype.concat.call(ar1, ar2));
console.log(ar1.concat(ar2));

const arr = []
if (arr){
    console.log('has arr');
}
