/**
 * Created by shadow on 2016.1.31.
 */
'use strict';

//setTimeout(n=>{
//
//},1000);

class User{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    changeUser(name,age){

        //ʹ�ü�ͷ����������this��������
        let fn = ()=>{
            this.name = name;
            this.age = age;
        }
        //let fn = function(){
        //    this.name = name;
        //    this.age = age;
        //}

        fn();
    }
}

var user = new User('xiao',20);

user.changeUser('leo',26);

console.log(user);