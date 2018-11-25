const strategies = {
  isNotEmpty: (value, err) => {
    if (value === '')
      return err;
  },
  minLength: (val, min, err) => {
    if (val.length < min) {
      return err;
    }
  }
}

let validator = function () {
  this.cache = [];
};

validator.prototype.add = (dom, rule, err) => {
  let arr = rule.split(':');
  this.cache.push(()=>{
    const stategy = arr.shift();
    arr.unshift(dom.value);
    arr.push(err);
    return strategies[stategy].apply(this,arr);
  })
};
validator.prototype.start = ()=>{
  for (let item of this.cache){
    const error = item();
    if (error) {
      return error;
    }
  }
};

