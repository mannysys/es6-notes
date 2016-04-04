
//数组的静态方法

//Array.from  // 类似数组的数据结构转换为数组
//Array.of    // 通过多个参数 生成 数组
//
//[].copyWithin(target,start,end) // 通过自身数据，在指定位置 替换数据
//
//[].find / [].findIndex  // 查找
//[].fill

//将有属性长度的对象转换为数组
//第二个参数函数可以对值进行处理
//var arr = Array.from({
//    '0':'qq 165656253',
//    '1':'leo',
//    'length':2
//
//},function(item,index){
//    return item + '---' + index;
//});
//console.log(arr);


//也可以将set对象集合转换为数组
//var set = new Set(['me','book','leo']);
//console.log(Array.from(set));


//通过Array.of生成精准的数组
var arr = Array.of(12,313,'leo');
console.log(arr);
























