var add = function(x, y){
  // console.log(Description);   // 공개 변수 영역에 접근 불가능.
  console.log(add.Description);  // 함수 이름으로 접근 가능.
  console.log(arguments.callee.Description);  // 함수 이름으로 접근 가능.
  return x + y;
}
add.Description = "This is an area for public variable.";
console.log(add(1, 2));
