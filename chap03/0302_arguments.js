/**
 * Arguments 객체에 대한 이해.
 * - 함수 내부에서는 argments[i]를 통해 Arguments 객체를 통해 넘어오는 인자에 접근할 수 있다.
 * - 함수에서 정의한 매개변수의 수보다 많은수의 인자값이 전달되면 자바스크립트는 Arguments 객체의 값을 앞에서부터
 * 차례로 받아서 매개변수에 할당하고 만는 인자값은 무시해버린다.
 * - 반대로 정해진 매개변수의 수보다 적은 수의 값이 넘어오면 앞에서부터 매개변수의 값이 차례로 채워지고 값을 받지 못한 매개변수는
 * undefined가 된다.
 */

function sumof(){
  var total = 0;

  for(var i=0; i<arguments.length; i++){
    total += arguments[i];
  }

  return total;
}

console.log(sumof(2, 3, 4));  // 9
console.log(sumof(8, 7));     // 15
