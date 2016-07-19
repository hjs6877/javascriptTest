function func1(num){
  g = "전역 범위에 선언된 변수"; // 런타임에 전역 스코프에 동적으로 변수가 정의 된다.
  if(num > 0){
    var b = num;
  }
  return b; // 같은 함수 내부라면 어떤 블로 내에서 정의한 변수에도 접근 가능하다.
}

console.log(func1(3));
console.log(g);
