/**
 * Created by shadow on 2016.1.30.
 *
 * Int8Array��8λ�з�������������1���ֽڡ�
 * Uint8Array��8λ�޷�������������1���ֽڡ�
 *
 * Int16Array��16λ�з�������������2���ֽڡ�
 * Uint16Array��16λ�޷����ֽڣ�����2���ֽڡ�
 *
 * Int32Array��32λ�з�������������4���ֽڡ�
 * Uint32Array��32λ�޷�������������4���ֽڡ�
 *
 * Float32Array��32λ������������4���ֽڡ�
 * Float64Array��64λ������������8���ֽڡ�
 *
 */


var buffer = new ArrayBuffer(12);
//��һ���������鴴������
//var tarr = new Int16Array(buffer);

//�ڶ����������鴴������
//var tarr = new Int16Array(10);//���������鳤����10
//����ռ����10�������ȣ����ڴ濪�ٵĿռ���20���ֽ�
//console.log(tarr.length,tarr.byteLength);

//�������������鴴������
//var tarr = new Int16Array(buffer,2,5);
//console.log(tarr.length);

//���ĸ��������鴴����������һ������3����(�ڲ�������һ��buffer)
//var tarr = new Int16Array([12,3,5]);
//console.log(tarr.length,tarr.byteLength);
































