/**
 * Created by shadow on 2016.1.31.
 */
'use strict';

//ģ���ַ�����д�붯̬����

let name = 'leo';
let qq = '1224234';

//���ú���
function log(){
    return 'good!';
}
let html = `
<div>
    <ul>
        <li>${name === 'zeng' ? 'ok' : 'no'}</li>
        <li>${qq}</li>
        <li>${ log() }</li>
    </ul>
</div>
`;

console.log(html);