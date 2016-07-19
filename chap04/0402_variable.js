var a = 2;
function func1(){
  var b = 3;
  console.log(a);
  return b;
}

console.log(func1());

console.log(b);       // 오류 발생.
