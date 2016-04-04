//异常任务

function asyncFun(a, b){
    // 返回Promise对象，该构造方法是接收一个函数
    // 该函数返回两个参数分别是
    // resolve表示结果值
    // reject表示错误消息
    return new Promise(function(resolve,reject){
        // 捕获异常
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject(new Error('no number'));
        }

        setTimeout(function(){
            resolve(a + b);
        },200);
    });
}

//调用方法返回的Promise对象然后再调用其中方法then，返回结果
asyncFun(1,'a')
    .then(function(result){
        if(result > 2){
            return asyncFun(result,2);
        }
    },function(err){//捕获异常第一种方法

        //捕获异常，一旦第一个有异常以后，第二个就不在捕获异常了
        console.log('first - ',err);
    })
    .then(function(result){
        if(result > 4){
            console.log('ok');
        }
    })
    .catch(function(error){//捕获异常第二种方法
        console.log('secibd - ',error);
    });




















































































