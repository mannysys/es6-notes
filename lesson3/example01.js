//�쳣����

function asyncFun(a, b){
    // ����Promise���󣬸ù��췽���ǽ���һ������
    // �ú����������������ֱ���
    // resolve��ʾ���ֵ
    // reject��ʾ������Ϣ
    return new Promise(function(resolve,reject){
        // �����쳣
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject(new Error('no number'));
        }

        setTimeout(function(){
            resolve(a + b);
        },200);
    });
}

//���÷������ص�Promise����Ȼ���ٵ������з���then�����ؽ��
asyncFun(1,'a')
    .then(function(result){
        if(result > 2){
            return asyncFun(result,2);
        }
    },function(err){//�����쳣��һ�ַ���

        //�����쳣��һ����һ�����쳣�Ժ󣬵ڶ����Ͳ��ڲ����쳣��
        console.log('first - ',err);
    })
    .then(function(result){
        if(result > 4){
            console.log('ok');
        }
    })
    .catch(function(error){//�����쳣�ڶ��ַ���
        console.log('secibd - ',error);
    });




















































































