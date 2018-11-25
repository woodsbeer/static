{
    let aa = {
        a: 'aaaaaa',
        b: 'bbbbbb',
        c: 'cccccc'
    }
    /**
     * 代理一个对象
     * @type {{a: string, b: string, c: string}}
     */
    let monitor = new Proxy(aa, {
        get(target, key) {
            //注意target[key]如果不存在那么就不用判断后面的了，所以后面target[key]不会报空指针
            if (target[key] && target[key].search('aaaaaa') != -1) {
                return target[key].replace('aaaaaa', 'sss');
            }
            else
                return target[key];

        },
        set(target, key, value) {
            //只有c可以改定或者新增
            if (key == 'c') {
                return target[key] = value;
            }
            else {
                return target[key];
            }
        },
        has(target, key) {
            if (key === 'b') {
                return target[key];  //如果有，返回value
            }
            else
                return false;
        }
    });
    console.log(monitor.a);  //raaaaa
    monitor.f = 'new f ';
    console.log(monitor.f);  //undefined
    console.log('b' in monitor);
    delete monitor.a; //把a删掉了
    console.log(monitor);
    console.log(Object.keys(monitor));  //

}
{
    /**
     * 代理方法
     * @param target 某个对象
     * @param valicate 验证方法的集合
     * @returns {*}
     */
    function valictor(target, valicate) {
        return new Proxy(target, {
            _valicate: valicate,
            set(target, key, value) {
                if (target.hasOwnProperty(key)) {
                    let va = this._valicate[key];
                    if (va(value)) {
                        return Reflect.set(target, key, value);
                    }
                    else {
                        throw  Error(`can t set ${key}`);
                    }
                }
                else {
                    throw  Error(`can t find ${key}`);
                }

            }
        })
    }

    let valicate= {
         name(val) {
            return typeof val == 'string' ? true : false;
        },

         age(val) {
            return typeof val == 'number' ? true : false;
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return valictor(this, valicate);
        }

    }
    let man = new Person('jojo',18);
    man.name = 88;  ///throw  Error(`can t set ${key}`);
    console.log(man);

}

