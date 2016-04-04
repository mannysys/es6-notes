'use strict';

class User{

    constructor(name,password){
        this.name = name;
        this.password = password;
    }

    validateName(cb){
        let name = this.name;
        return new Promise(function(resolve, reject){
            //ģ���첽��ʹ��setTimeout
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
         ������ص���Promise������Ե���then����
         ������ز���Promise����
         �ڲ���ͨ��Promise.resolve()����һ��Promise����
         �������������
         var promise = Promise.resolve('validate name ok');
         var promise = new Promise(function(resolve,reject){
         resolve('validate name ok');
         });

         ���Ե�һ��then�����з��صĲ���Promise����������������ǿ��Լ�������then����
         ��Ϊ��Promise�ڲ����װ��Promise����

         */
        return 'validate name ok';
    })
    .then(function(result){
        console.log(result);
    });

























