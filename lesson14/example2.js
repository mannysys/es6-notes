

//通过DataView就可以创建多个数组化类型

var buffer = new ArrayBuffer(10);
var dataviwe = new DataView(buffer);
//写进数据，默认是小字节数据开始，加入true是从大字节数据开始
dataviwe.setFloat32(2,18.9,true);//写入值，偏移2位开始
dataviwe.setInt32(6,2000,true);//偏移6位开始写入值
dataviwe.setInt16(0,90,true);

//读取数据
var value = dataviwe.getFloat32(2,true);
console.log(value);



























