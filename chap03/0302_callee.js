/**
 * Arguments.callee 속성
 * - callee 속성은 현재 실행되고 있는 함수(함수 객체)를 나타낸다. 즉, 함수 객체 자신을 가리키는 수단이다.
 */

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
