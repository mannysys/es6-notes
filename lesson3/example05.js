
//ͬʱ�õ��첽�����Ľ��

function asyncFun(a, b, time){
    // resolve��ʾz��ȷ���ֵ
    // reject��ʾ������Ϣ
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
 ��Щpromiseȫ��һ��ִ���꣬���ȷ���ִ����Ľ����race���ص�һ�����all�Ƿ������н��
 �����3��promise��һ���д���ģ������ᱻִ��then��һ��������ȷ��������
 */
var promise = Promise.race([asyncFun(1,'a',200),asyncFun(2,3,20),asyncFun(1,22,22)]);
promise.then(function(result){
    console.log(result);
},function(err){
    console.log(err);
});




























