
var arr = [22,33,44,55];

//����ֵ�����ط��Ϻ���������ֵ
var value = arr.find(function(value,index,arr){
    return value > 33;
});
console.log(value);


//findIndex���ص��Ƿ��Ϻ�������������
var value = arr.findIndex(function(value,index,arr){
    return value > 33;
});




var arr2 = [22,NaN];
var value2 = arr2.findIndex(function(v){
    return Object.is(NaN,v);
});

console.log(value2);

















