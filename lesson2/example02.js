'use strict';
// 类
class User{

    // 构造方法
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 静态方法
    static getClassName(){
        return 'User';
    }

    // 类的方法
    changeName(name){
        this.name = name;
    }
    changeAge(age){
        this.age = age;
    }
    // 获取值方法
    get info(){
        return 'name:' + this.name + ' | age:' + this.age;
    }

}

// 子类继承父类
class Manager extends User{

    constructor(name,age,password){

        //首先要创建父类对象
        super(name,age);
        //然后所有在子类中创建的方法和属性，都会加到父类创建的对象上
        this.password = password;

    }

    // 添加类方法
    changePassword(password){
        this.password = password;
    }


    get info(){
        //在子类get方法中调取父类get方法
        return super.info
    }




}

//console.log(typeof User,typeof Manager);

var manager = new Manager('leo',22,'123');
console.log(manager.info);

//class I extends User{
//
//}
//var me = new I('leo',22);
//console.log(me);
























