'use strict';

// Generator����
// ʹ��yield���Խ�Generator�����ڲ��ֳɼ���ȥִ��
// ÿһ���ϵ���ͨ��yieldȥ��ͣ��
// ������һ�Σ���ִ���˺����ڲ�һ��
function * fn(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

// Generator����ִ�к󷵻ص���һ��ָ����ʵ����iterator
// ����next()��ִ�з���
let it = fn();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

for(let v of it){
    console.log(v);
}














