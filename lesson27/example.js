/**
 * Created by shadow on 2016.2.1.
 */

//��������Ĭ��ֵ
//function test(x=12,y=12){
//    console.log(x,y);
//}
//test(25);

// �����������Ĭ��ֵ,���ø����������ƥ��û�д��κ�ֵ������µ��ú���
function test([x=2,y=3]=[]){
    console.log(x,y);
}

test();