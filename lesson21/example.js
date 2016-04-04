/**
 * Created by shadow on 2016.1.31.
 */

var str = '你好啊';

console.log(str.indexOf('好')); //查询，返回索引

console.log(str.includes('啊'));//查下字符返回true或false
console.log(str.startsWith('好啊')); //查询字符从开始位置，返回true或false
console.log(str.endsWith('你好',2));//查询字符从末尾开始，返回true或false

console.log(str.repeat(3)); //将字符串串重复3次

// 关于字符串的API
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String












