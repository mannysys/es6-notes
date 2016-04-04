'use strict';

// set不能存储重复的值

//let arr = [1,2,3,'5','5'];
//let st = new Set(arr);
//
//// set一些方法
//// 可以添加对象
//let user = {name:'leo',qq:'135655'};
//st.add(user).add(user); //set每次添加返回自身可以连续添加
//console.log(st.size); // set长度
//let bool = st.delete(user); //删除对象
//console.log(bool);
//
//st.add(22);
//console.log(st.has(22)); //判断在set里有没有这个对象
//
//st.clear(); //清空所有的值


//let arr = ['qq135695','forjs.org','forjs.org'];
//let newArr = Array.from(new Set(arr));//转换一个新的数组
//console.log(newArr);


// 遍历
let st = new Set(['qq156565','forjs.org','forjs.org','网名 leo']);
// set直接遍历自身对象（set自身已经实现了iterator接口了）
for(let v of st){
    console.log(v);
}


// 返回iterator对象（在set里键和值是一样的）
// 遍历键
//let itkeys = st.keys();
//for(let k of itkeys){
//    console.log(k);
//}
// 遍历值
//let valuesI = st.values();
//for(let v of valuesI){
//    console.log(v);
//}
// 实体对象，遍历出数组结构
//let entriesI = st.entries();
//for(let o of entriesI){
//    console.log(o);
//}















