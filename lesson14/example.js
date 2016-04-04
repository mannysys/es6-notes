/**
 * Created by shadow on 2016.1.30.
 */

//创建一个ArrayBuffer内存区域，存放数组
var buffer = new ArrayBuffer(8);
var int16Arr = new Int16Array(buffer);
int16Arr[0] = 300;
var int8Arr = new Int8Array(buffer);
console.log(int8Arr);


var buffer2 = new ArrayBuffer(8);
var dataview = new DataView(buffer2);
dataview.setInt16(0,300);
var int8Arr2 = new Int8Array(buffer2);
console.log(int8Arr2);













































