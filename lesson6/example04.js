'use strict';


function sum(a,b){
    return a + b;
}

function * fn(){
    // yield��Ϊ������������д��
    let result = sum(yield 1,yield 3);
    //let result = sum(yield 1,5 + (yield 3) );
    //һ�����ʽ�У���Ҫ��yield���������
    console.log('my qq��' + (yield qq));
}

fn();