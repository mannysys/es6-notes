/**
 * Created by shadow on 2016.2.1.
 */
//通过实例巩固变量解构赋值

//函数参数数组和对象设置默认值都可以匹配传空值
//function test([x=12,y=22]=[],{name='leo',qq='123213213'}={}){
//    return [x,y,name,qq];
//}
//let [x,y,name,qq] = test();
//console.log(x);


let map = new Map();
map.set('k1','v1');
map.set('k2','v2');
map.set('k3','v3');
map.set('k4','v4');

for(let [key,value] of map){
    console.log(key,value);
}





























