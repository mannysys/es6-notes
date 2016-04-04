
//第一个参数是拷贝的区域，第二个参数是起始位置，第三参数是结束位置
//copyWithin(position,start,end);

//将2、3位置替换成6、7
var arr = [1,2,3,4,5,6,7];
//arr.copyWithin(1,5,7);
//将3替换成6。替换内容是索引位置2，从索引位置5开始到6结束
arr.copyWithin(2,5,6);
console.log(arr);


































