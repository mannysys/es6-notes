//类 class

function User(name,age){
    this.name = name;
    this.age = age;

}

// 静态方法
User.getClassName = function(){
    return 'User';
};

// 类的方法
User.prototype.changeName = function(name){
    this.name = name;
};
User.prototype.changeAge = function(age){
    this.age = age;
};
//取值函数
Object.defineProperty(User.prototype,'info',{
    get(){
        return 'name:' + this.name + ' | age:' + this.age;
    }
});

var user = new User('leo',22);

console.log(user);









































