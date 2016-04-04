/**
 * Created by shadow on 2016.1.30.
 *
 * Int8Array：8位有符号整数，长度1个字节。
 * Uint8Array：8位无符号整数，长度1个字节。
 *
 * Int16Array：16位有符号整数，长度2个字节。
 * Uint16Array：16位无符号字节，长度2个字节。
 *
 * Int32Array：32位有符号整数，长度4个字节。
 * Uint32Array：32位无符号整数，长度4个字节。
 *
 * Float32Array：32位浮点数，长度4个字节。
 * Float64Array：64位浮点数，长度8个字节。
 *
 */


var buffer = new ArrayBuffer(12);
//第一个类型数组创建方法
//var tarr = new Int16Array(buffer);

//第二个类型数组创建方法
//var tarr = new Int16Array(10);//创建的数组长度是10
//数组占用了10个数长度，而内存开辟的空间是20个字节
//console.log(tarr.length,tarr.byteLength);

//第三个类型数组创建方法
//var tarr = new Int16Array(buffer,2,5);
//console.log(tarr.length);

//第四个类型数组创建方法创建一个数组3个数(内部创建了一个buffer)
//var tarr = new Int16Array([12,3,5]);
//console.log(tarr.length,tarr.byteLength);
































