/**
 * Created by shadow on 2016.2.1.
 */

//函数参数默认值
//function test(x=12,y=12){
//    console.log(x,y);
//}
//test(25);

// 函数数组参数默认值,设置个空数组可以匹配没有传任何值的情况下调用函数
function test([x=2,y=3]=[]){
    console.log(x,y);
}

test();