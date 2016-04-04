'use strict';

class User{

    constructor(name,password){
        this.name = name;
        this.password = password;
    }

    validateName(cb){
        let name = this.name;
        return new Promise(function(resolve, reject){
            //模拟异步，使用setTimeout
            setTimeout(function(){
                if(name === 'leo'){
                    resolve('success');
                }else{
                    reject('error');
                }
            });

        });
    }
    validatePassword(){
        let password = this.password;
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if(password === '123'){
                    resolve('success');
                }else{
                    reject('error');
                }
            });
        });
    }


}

const user = new User('leo','123');

user.validateName()
    .then(function(result){
        /*
         如果返回的是Promise对象可以调用then方法
         如果返回不是Promise对象，
         内部会通过Promise.resolve()创建一个Promise对象
         以下这两个相等
         var promise = Promise.resolve('validate name ok');
         var promise = new Promise(function(resolve,reject){
         resolve('validate name ok');
         });

         所以第一个then方法中返回的不是Promise对象或者其它对象，是可以继续调用then方法
         因为在Promise内部会包装成Promise对象

         */
        return 'validate name ok';
    })
    .then(function(result){
        console.log(result);
    });

























