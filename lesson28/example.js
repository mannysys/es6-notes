/**
 * Created by shadow on 2016.2.1.
 */


//�����Ķ�������Ľ⹹��Ĭ��ֵ

//function test({x,y}={x:12,y:22}){
//    console.log(x,y);
//}
//test();

//���������������Ĭ��ֵ
function config({x=1,y=2,z=3}={},[a=11,b=22,c=33]=[],name='leo'){
    console.log(x,y,z);
    console.log(a,b,c);
    console.log(name);
}

config();








