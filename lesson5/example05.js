'use strict';

//对字符串进行遍历
console.log('leo'[Symbol.iterator]);

for(let char of 'leo'){
    console.log(char);
}