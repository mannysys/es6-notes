

//ͨ��DataView�Ϳ��Դ���������黯����

var buffer = new ArrayBuffer(10);
var dataviwe = new DataView(buffer);
//д�����ݣ�Ĭ����С�ֽ����ݿ�ʼ������true�ǴӴ��ֽ����ݿ�ʼ
dataviwe.setFloat32(2,18.9,true);//д��ֵ��ƫ��2λ��ʼ
dataviwe.setInt32(6,2000,true);//ƫ��6λ��ʼд��ֵ
dataviwe.setInt16(0,90,true);

//��ȡ����
var value = dataviwe.getFloat32(2,true);
console.log(value);



























