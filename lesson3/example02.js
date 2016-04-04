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

/*
 * 如果用户名验证通过执行第一个then方法，
 * 返回的是user类中validatePassword方法的Promise对象执行
 * 然后密码验证通过继续调用执行第二个then方法
 * 用户名和密码如果有一个验证错误都会调用catch捕获异常
 */
user.validateName()
    .then(function(result){
        return user.validatePassword();
    })
    .then(function(result){
        console.log('validate success');
    })
    .catch(function(err){
        console.log('validate error');
    });

























