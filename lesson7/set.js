'use strict';

// set���ܴ洢�ظ���ֵ

//let arr = [1,2,3,'5','5'];
//let st = new Set(arr);
//
//// setһЩ����
//// ������Ӷ���
//let user = {name:'leo',qq:'135655'};
//st.add(user).add(user); //setÿ����ӷ�����������������
//console.log(st.size); // set����
//let bool = st.delete(user); //ɾ������
//console.log(bool);
//
//st.add(22);
//console.log(st.has(22)); //�ж���set����û���������
//
//st.clear(); //������е�ֵ


//let arr = ['qq135695','forjs.org','forjs.org'];
//let newArr = Array.from(new Set(arr));//ת��һ���µ�����
//console.log(newArr);


// ����
let st = new Set(['qq156565','forjs.org','forjs.org','���� leo']);
// setֱ�ӱ����������set�����Ѿ�ʵ����iterator�ӿ��ˣ�
for(let v of st){
    console.log(v);
}


// ����iterator������set�����ֵ��һ���ģ�
// ������
//let itkeys = st.keys();
//for(let k of itkeys){
//    console.log(k);
//}
// ����ֵ
//let valuesI = st.values();
//for(let v of valuesI){
//    console.log(v);
//}
// ʵ����󣬱���������ṹ
//let entriesI = st.entries();
//for(let o of entriesI){
//    console.log(o);
//}















