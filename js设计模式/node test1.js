const colors =require('colors')
//修改log输出的颜色 033[31m 这个表示之后的粉红色输出 后面的 033[39m 表示正常颜色输出
console.log('\033[31m red \033[39m fefe');
//或者安装colors包，引入之后直接在log的后面.colorname   注意不要加逗号，因为不是参数
console.log('jojo' .yellow);

console.log(Buffer.concat([[1, 2]]));

