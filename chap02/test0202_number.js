/**
*  - Number 타입
*  - Number는 원시타입의 숫자를 객체로 만들기 위한 래퍼다.
*/

var num1 = new Number(9);

console.log(typeof num1);
console.log(num1);

// 값을 숫자로 변환하는데에도 사용할 수 있다.
var v1 = new String("10");
var num2 = Number(v1);
console.log(typeof num2);
console.log(num2);

// 숫자가 아닌 값이 인자로 전달되면 반환값은 NaN이 된다.
var v2 = "하하";
console.log(Number(v2));
