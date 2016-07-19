/**
 * # 함수 객체
 * - 함수는 변수에 할당 될 수 있는 값으로 사용될 수 있고 함수가 다른 함수를 호출하는 인자로 사용될 수도 있으며, 다른 함수의 반환값으로도 사용될 수 있다.
 */

console.log(add1(1,2));
// 파싱 단계에서 add 객체가 정의된다.
function add1(x, y){
  return x+y;
}
console.log(add2(1,2));
// 런타임에 함수가 정의된다.
var add2 = function(x, y){
  return x+y
}
