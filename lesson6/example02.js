'use strict';

// yield ֵ�͸�ֵ
function * fn(_name){
    let name = yield _name;//yieldĬ��ʼ�շ���undefined
    return name;
}

let it = fn('leo');
console.log(it.next());
//���Ҫyield����ֵ��ֻ��ͨ��next��ʽ��ֵ
console.log(it.next('liang'));






























