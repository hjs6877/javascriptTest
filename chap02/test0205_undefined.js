/**
 * - undefined
 * - 변수를 선언하면 먼저 undefined 값이 할당된다.
 * - undefined는 "값이 정해지지 않음"이라는 의미를 나타내기 위해 특별히 정의한 값이다.
 * - 값이 할당되지 않은 변수, 할당되지 않은 함수 매개변수, 할당되지 않은 객체의 멤버는 undefined로 초기화된다.
 */
// 값을 할당하지 않음.
var v2;
console.log(v2);

// 속성에 값을 할당하지 않음.
var obj = {};
console.log(obj.p);

// if 문에서 undefined는 false로 변환된다.
var v3;
if(v3){
  console.log("v3가 true 일 때 실행");
}else{
  console.log("v3가 false 일 때 실행");
}
