'use strict';

//����һ������
var obj = {
    'name':'leo',
    'qq':'156464654'
};

//��������������map��
//let map = new Map();
//map.set(obj,'very good!');
//map.set(12,'number = 12');
//console.log(map.get(obj));
//console.log(map.get(12));
//console.log(map.size);
//
//map.delete(12);
//console.log(map.size);
////�ж��Ƿ��м�12
//console.log(map.has(12));

// map.clear()  �������ֵ

let map = new Map([
    ['name','leo'],
    ['qq','16556565']
]);
console.log(map.get('name'),map.get('qq'));

//����key
let keys = map.keys();
for(let k of keys){
    console.log(k);
}
//����ֵ
let values = map.values();
for(let v of values){
    console.log(v);
}

//����ʵ����󷵻�������
let entries = map.entries();
for(let o of entries){
    console.log(o);
}




var me = {
    name:'liang'
};
//����
map.forEach(function(k,v){
   console.log(this.name,k,v);
},me);
























