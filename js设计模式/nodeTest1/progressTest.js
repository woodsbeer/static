// const Progress = require('progress')
// const bar = new Progress(" :bar :percent", {
//     total: 10,
//     width: 50
// })
//
// const interval = setInterval(()=>{
// bar.tick();
// if (bar.complete)
//     console.log('结束了！');
//     clearInterval(interval)
// },500)
var ProgressBar = require('progress');

var bar = new ProgressBar(':bar :percent', { total: 100 , width: 50});
var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);