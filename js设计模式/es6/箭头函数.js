{
    const a = 1;
    const fn = () => {
        const a=11;
        console.log(a);
    }

    function ff() {
        const a = 11;
        console.log(a);
    }
    const fff = function(){
        const a = 11;
        console.log(this.a);
    };
    fff();
}