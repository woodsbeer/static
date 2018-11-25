{
  //一个有订阅功能的类
  class SaleOffice {
    constructor() {
      this.clientList = {};
      this.listin = (key, fn) => {
        if (!this.clientList[key]) {
          this.clientList[key] = [];
        }
        this.clientList[key].push(fn)
      }
      this.trigger = this.trigger.bind(this)
    }

    trigger() {
      const key = Array.prototype.shift.call(arguments);
      let fns = this.clientList[key];
      if (!fns)
        return false
      for (let fn  of fns) {
        fn.apply(this, arguments)
      }
    }
  }

  const saleOffice1 = new SaleOffice();
  //传入的函数可以直起名
  saleOffice1.listin('sm70', f1 = sprice => {
    console.log(sprice, 'sm70');
  })
  saleOffice1.listin('sm180', splice => {
    console.log(splice);
  })
  saleOffice1.trigger('sm70', 800)

}
{
}

