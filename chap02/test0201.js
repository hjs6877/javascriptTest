var n1 = 255;
var n2 = 255.0;
var n3 = 0377;
var n4 = 0xff;

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof n4);

var v = "123" + 123;
console.log(typeof v);
console.log(v);

/**
* Infinity 타입: 최대 숫자를 벗어나는 숫자를 표현.
*/
// 자바스크립트에서 Infinity의 타입은 "number"이다.
console.log(typeof Infinity);

// 숫자를 0으로 나누는 경우에도 Infinity를 반환한다.
var v = 1/0;
console.log(v);

// 최솟갑 숫자를 표현하는 경우 - 를 붙이는데 이것도 "number" 타입으로 인식한다.
var i = -Infinity;
console.log(i);
console.log(typeof i);
