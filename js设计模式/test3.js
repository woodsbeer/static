let  arr1 = [1,2];
arr1.push(...[3,4]);
console.log(arr1);

let f1 = (a=11)=>{
    console.log(a);
};
f1();

if(0){
    console.log('true!');
}
class Class1 {
    constructor(){
        this.name = 'dd'
    }
    // name='dd';
    getThis(){
        return this
    }
}
let c1 = new Class1();
console.log(c1.getThis());