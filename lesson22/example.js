/**
 * Created by shadow on 2016.1.31.
 */
'use strict';

//模版字符串，写入动态数据

let name = 'leo';
let qq = '1224234';

//调用函数
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