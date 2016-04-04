/**
 * Created by shadow on 2016.1.30.
 */

//创建类型化数组同时也创建了内部buffer
//var tarr = new Int16Array([1,2,3,4,5,6]);
//var tarr2 = tarr.subarray(1,3);
//console.log(tarr2);

var arr = new Int8Array([1,2,3,4,5]);
var arr2 = new Int16Array(5);
//set是将arr数值拷贝到arr2
//arr2.set(arr);
//从arr中索引2开始拷贝
arr2.set(arr,2);
console.log(arr2);



















