const json = {
    'q':1,
    'qq':11,
};
const json1 = '[1,2]'
const list =JSON.parse(json1).map(item=>
    item
)
console.log(list);
const s1 = [1]
const s2 = s1
const s3 = s1
console.log(s2 === [1]);