/**
 * Arguments.callee 속성
 * - callee 속성은 현재 실행되고 있는 함수(함수 객체)를 나타낸다. 즉, 함수 객체 자신을 가리키는 수단이다.
 */

// arguments.callee 속성을 이용해서 익명 함수가 자신을 참조하여 다시 호출한다. 재귀 호출 구현시 유용하게 사용 가능.
function makeFactorialFunc(){
  return function(x){
    if(x <= 1){
      return 1; // 여기서 종료.
    }
    return x * arguments.callee(x - 1);
  }
}

var result = makeFactorialFunc()(5);
console.log(result);
