//�� class

function User(name,age){
    this.name = name;
    this.age = age;

}

// ��̬����
User.getClassName = function(){
    return 'User';
};

// ��ķ���
User.prototype.changeName = function(name){
    this.name = name;
};
User.prototype.changeAge = function(age){
    this.age = age;
};
//ȡֵ����
Object.defineProperty(User.prototype,'info',{
    get(){
        return 'name:' + this.name + ' | age:' + this.age;
    }
});

var user = new User('leo',22);

console.log(user);









































