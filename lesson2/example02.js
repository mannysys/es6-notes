'use strict';
// ��
class User{

    // ���췽��
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // ��̬����
    static getClassName(){
        return 'User';
    }

    // ��ķ���
    changeName(name){
        this.name = name;
    }
    changeAge(age){
        this.age = age;
    }
    // ��ȡֵ����
    get info(){
        return 'name:' + this.name + ' | age:' + this.age;
    }

}

// ����̳и���
class Manager extends User{

    constructor(name,age,password){

        //����Ҫ�����������
        super(name,age);
        //Ȼ�������������д����ķ��������ԣ�����ӵ����ഴ���Ķ�����
        this.password = password;

    }

    // ����෽��
    changePassword(password){
        this.password = password;
    }


    get info(){
        //������get�����е�ȡ����get����
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
























