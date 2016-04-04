'use strict';

// Generator函数和Promise来让异步逻辑关系，通过用同步表达出来

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







































