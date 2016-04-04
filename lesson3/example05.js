
//同时得到异步函数的结果

function asyncFun(a, b, time){
    // resolve表示z正确结果值
    // reject表示错误消息
    return new Promise(function(resolve,reject){
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject(new Error('no number'));
        }

        setTimeout(function(){
            resolve(a + b);
        },time);
    });
}

//var resultList = [];
//asyncFun(1,2)
//    .then(function(result){
//        resultList.push(result);
//        return asyncFun(2,3);
//    }).then(function(result){
//        resultList.push(result);
//    });


//var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(1,22)]);
//promise.then(function(result){
//    console.log(result);
//});


/*
 这些promise全部一块执行完，最先返回执行完的结果，race返回单一结果，all是返回所有结果
 如果这3个promise有一个有错误的，都不会被执行then第一个参数正确函数方法
 */
var promise = Promise.race([asyncFun(1,'a',200),asyncFun(2,3,20),asyncFun(1,22,22)]);
promise.then(function(result){
    console.log(result);
},function(err){
    console.log(err);
});




























