'use strict';

let obj = {'leo':'45456465','zengliang':'16546465'};

obj[Symbol.iterator] = function(){
    let self = this;
    let i = 0;
    const names = Object.keys(this);
    const length = names.length;

    //返回一个iterator对象
    return {
        next: function(){
            let name = names[i++];
            let qq = self[name];
            return {value:{name:name,qq}, done:i > length}
        }
    }
};

for(let u of obj) console.log(u);























