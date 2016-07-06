/**
 * 자바스크립트의 변수 스코프는 중괄호({})로 결정되는 것이 아니라 함수 단위로 결정된다.
 */
// 파싱 단계에서 함수 내에 선언된 변수가 함께 정의된다.
// 변수를 검색할 때 {} 단위로 찾는것이 아니라 함수 단위로 찾는다.
function func(count){
  console.log(i); // undefined 출력.
  for(var i=0; i<count; i++){

  }
  return i;
}

console.log(func(100));


function func2(count){
  for(i=0;i<count;i++){

  }
  return i;
}

console.log(func2(100));
console.log(i);
