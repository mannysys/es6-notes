'use strict';

//定义一个对象
var obj = {
    'name':'leo',
    'qq':'156464654'
};

//可以用作对象做map键
//let map = new Map();
//map.set(obj,'very good!');
//map.set(12,'number = 12');
//console.log(map.get(obj));
//console.log(map.get(12));
//console.log(map.size);
//
//map.delete(12);
//console.log(map.size);
////判断是否有键12
//console.log(map.has(12));

// map.clear()  清空所有值

let map = new Map([
    ['name','leo'],
    ['qq','16556565']
]);
console.log(map.get('name'),map.get('qq'));

//遍历key
let keys = map.keys();
for(let k of keys){
    console.log(k);
}
//遍历值
let values = map.values();
for(let v of values){
    console.log(v);
}

//遍历实体对象返回是数组
let entries = map.entries();
for(let o of entries){
    console.log(o);
}




var me = {
    name:'liang'
};
//遍历
map.forEach(function(k,v){
   console.log(this.name,k,v);
},me);
























