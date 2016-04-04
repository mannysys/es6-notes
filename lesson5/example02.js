'use strict';

class UserGroup{

    constructor(users){
        // json
        this.users = users;

    }
    //���������
    [Symbol.iterator](){
        let self = this;
        let i = 0;
        const names = Object.keys(this.users);
        const length = names.length;

        //����һ��iterator����
        return {
            next: function(){
                let name = names[i++];
                let qq = self.users[name];
                return {value:{name:name,qq}, done:i > length}
            }
        }
    }

}

let group = new UserGroup({'leo':'45456465','zengliang':'16546465'});

for(let user of group){
    console.log(user);
}


//let iterator = group[Symbol.iterator]();
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());















