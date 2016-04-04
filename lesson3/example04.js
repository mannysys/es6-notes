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

const user = new User('leo','1235');

// then������һ����������ѡ�ģ��ڶ�����������ѡ��
// then�е�һ������������ȷ�����У�������׳��쳣ֻ�ܱ�����catch������
// then�еڶ��������������󲶻����reject�쳣
user.validateName()
    /*
       ����û���֤û��ͨ������ִ��then�ڸ�����
       then����������resolve��reject
       �ڽ���then֮ǰ��reject�Ѿ������˴������Ծͻ�ִ��then�����ĵ�2������
     */
    .then(function(result){
        throw new Error('first error!');//�׳��쳣������catch����
        return user.validatePassword();
    },function(err){
        console.log('second error!');
    })
    .catch(function(err){
        console.log(err);
    });

























