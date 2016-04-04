

//动态属性名
var ok = 'ok';
//obj['myid'+ok] = '007';
//obj['age'+ok] = 22;

//对象属性的新写法
var obj = {
    ['myid'+ok]:'007',
    ['age'+ok]:22,
    getName(firstName,lastName){

        return {firstName,lastName}
    },

    set name(name){
        this.name = name;
    },
    get name(){
       return this.name;
    }

};


var obj2 = {};

module.exports = {obj,obj2};


































