/**
 * Created by shadow on 2016.1.31.
 */

'use strict';

class User {
    constructor() {

    }
}

var p = {
    getName(){}
};

var user = new User();
console.log(user.__proto__ === User.prototype);
user.__proto__ = p;

//写对象
Object.setPrototypeOf(user,p);
var proto = Object.getPrototypeOf(user);//读对象
console.log(proto === user.__proto__);