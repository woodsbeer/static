const dely = (params) => {
    const {tag, cb} = params;
    if (!tag) {
        return setTimeout(() => {
            cb()
        }, 2000)
    }
    else {
        clearTimeout(tag);
        return setTimeout(() => {
            cb()
        }, 3000)
    }
};
let tag = undefined;
for (let i = 0; i < 3; i++) {
    tag = dely({tag,cb:()=>{
            console.log('okok');
        }});
}
console.log('start');