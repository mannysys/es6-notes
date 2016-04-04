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

const user = new User('leo','1235');

// then函数第一参数函数必选的，第二参数函数可选的
// then中第一个参数函数正确方法中，如果有抛出异常只能被下面catch所捕获
// then中第二个参数函数错误捕获的是reject异常
user.validateName()
    /*
       如果用户验证没有通过会先执行then第个函数
       then有两个参数resolve和reject
       在进入then之前，reject已经产生了错误所以就会执行then方法的第2个参数
     */
    .then(function(result){
        throw new Error('first error!');//抛出异常后被下面catch捕获
        return user.validatePassword();
    },function(err){
        console.log('second error!');
    })
    .catch(function(err){
        console.log(err);
    });

























