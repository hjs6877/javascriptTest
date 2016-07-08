/**
 * 함수를 정의하는 3가지 방법
 */

// 1. 함수 정의: 프로그램을 파싱하는 단계에서 함수 변수인 add가 정의 되고, 함수를 호출하면 런타임에 x, y가 정의 된다.
function add(x, y){
  return x + y;
}

// 2. 함수 리터럴 이용
var add = function(x, y){
  return x + y;
}

// Function 생성자 사용
var add = new Function("x", "y", "return x + y;");
