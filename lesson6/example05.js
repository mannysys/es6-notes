'use strict';

function * fn(){
    let qq;
    try{
        //yieldĬ������·���undefinedֵ�������׳��쳣
        qq = yield ff; // ffû�ж��岶���쳣
    }catch(e){
        console.log('qq have error!');
    }
    console.log(qq);
}

let g = fn();

g.next(); //��һ������ʱ���ǽ��뷽������
//�ڶ������вŷ��ظ�ֵ��yield��ֵ
g.next('qq 1566523');

//���������û�в����쳣�����������������쳣
//try{
//    g.throw('error!');
//}catch(e){
//    console.log('error 2');
//}







































































