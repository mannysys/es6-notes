/**
 * Created by shadow on 2016.1.30.
 */

//�������ͻ�����ͬʱҲ�������ڲ�buffer
//var tarr = new Int16Array([1,2,3,4,5,6]);
//var tarr2 = tarr.subarray(1,3);
//console.log(tarr2);

var arr = new Int8Array([1,2,3,4,5]);
var arr2 = new Int16Array(5);
//set�ǽ�arr��ֵ������arr2
//arr2.set(arr);
//��arr������2��ʼ����
arr2.set(arr,2);
console.log(arr2);



















