'use strict';

// Generator������Promise�����첽�߼���ϵ��ͨ����ͬ��������

function asyncF(name){
    return new Promise(function(resolve){
        setTimeout(function(resolve){
            resolve('my name is ' + name);
        });
    });
}

function * fn(){

    console.log(asyncF('leo'));

}

fn();







































