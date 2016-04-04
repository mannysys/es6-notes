
// Promise有两个静态方法
var promise = Promise.resolve('hello');
//上面这个和下面这个都一样，相等的
var promise = new Promise(function(resolve,reject){
    resolve('hello');
});

promise.then(function(result){
    console.log(result);
});

var promise2 = Promise.reject('error');
promise2.then(null,function(err){
    console.log(err);
});




















