'use strict';

//�������������
//{
//    var a = 12;
//    let b = 15;
//    {
//        console.log(a,b);
//    }
//}

//й��
//for(let i=0;i<5;i++){
//
//}
//console.log(i);

//����
//function f(){
//    console.log(a);
//    var a=12;
//}

//��Ȼ�ⲿ�������a��
//���Ǻ����ڲ����Ҳ����a�Ļ����������a��ʧЧ���鼶let�޷�������
//var a = 12;
//function f(){
//    console.log(a);
//    let a;
//}
//f();

//{
//    let a;
//    var a;
//}

//��������ִ����������
//var config = (function(){
//    var config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//    return config;
//})();
//let config;
//{
//    config = [];
//    config.push(1);
//    config.push(2);
//    config.push(5);
//}

//������������
//function a(){console.log(1);}
//function f(){
//    a();
//    if(false){
//        function a(){console.log(2);}
//    }
//}
//f();

//ʵ�ʵ�����
//var arr = [];
//function f(){
//    for(let i=0;i<5;i++){
//        arr.push(function(){
//            console.log(i);
//        })
//    }
//}
//f();
//arr[1]();

//���� constʹ�ã��������ڴ��ַ���ɸ���
const a = 12;

//������Ա�����
const aa = {
    name:'leo'
};
aa.name = 'zeng liang';
aa.email = '32323@qq.com';
//���׷�װ����������󣬾Ͳ����ڸ�����
Object.freeze(aa);

console.log(aa);







































