/**
 * Created by shadow on 2016.1.30.
 */

//相当于全等

console.log(Object.is({},{}) , {} === {});

console.log(Object.is(NaN,NaN) , NaN === NaN);

console.log(Object.is(+0,-0) , +0 === -0);