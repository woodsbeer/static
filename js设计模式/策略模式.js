{
    //面向对象的模式
    //计算类
    //让一个对象去将指定的方法作为属性，然后执行
    const performanceS = function () {

    };
    performanceS.prototype.calculate = function (salary) {
        return salary * 4;
    }
    const performanceA = function () {

    };
    performanceA.prototype.calculate = function (salary) {
        return salary * 3;
    }
    const performanceB = function () {

    };
    performanceB.prototype.calculate = function (salary) {
        return salary * 2;
    }

    //策略类
    const bonus = function () {
        this.performance = null;
        this.salary = null;
    }
    bonus.prototype.setPerformance = function (performance) {
        this.performance = performance;
    }
    bonus.prototype.setSalary = function (salary) {
        this.salary = salary;
    }
    bonus.prototype.calculate = function () {
        return this.performance.calculate(this.salary);
    }

    const myBouns = new bonus();
    myBouns.setPerformance(new performanceS());
    myBouns.setSalary(5600);
    console.log(myBouns.calculate());
    myBouns.setPerformance(new performanceB());
    myBouns.setSalary(2000);
    console.log(myBouns.calculate());
}

{
    let strategies = {
        A: salary => salary * 3,
        B: salary => salary * 2,
        S: salary => salary * 5,
    }

    function calculate(salary, perfomance) {
        return strategies[perfomance](salary)
    }

    console.log(calculate(3000, 'S'));
}
{
    const tween = {

        linear: function (t, b, c, d) {  //匀速
            return c * t / d + b;
        },
        easeIn: function (t, b, c, d) {  //加速曲线
            return c * (t /= d) * t + b;
        },
        easeOut: function (t, b, c, d) {  //减速曲线
            return -c * (t /= d) * (t - 2) + b;
        },
        easeBoth: function (t, b, c, d) {  //加速减速曲线
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },

    }
    const animation = function (dom) {
        this.dom = dom;
        this.startTime = 0;
        this.startPos = 0;
        this.endPos = 0;
        this.duration = null;
        this.propertyName = null;
        this.easing = null;

        const start = (propertyName, endPos, duration, easing) => {
            this.startTime = +new Date;
            this.propertyName = propertyName;
            this.endPos = endPos;
            this.easing = tween[easing];
            this.startPos = this.dom.getBoundingClientRect()[propertyName];


            let timer = setInterval(() => {
                if (step() === false) {
                    clearInterval(timer())
                }

            }, 20);
        }
        const step = () => {
            let t = +new Date;
            if (t >= this.startTime + this.duration) {
                update(this.endPos);
                return false;
            }
            let pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
            update(pos);
        }
        const update = pos => {
            this.dom.style[this.propertyName] = pos + 'px';
        }
        return {
            start
        }
    }

}


