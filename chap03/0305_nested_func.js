var func1 = function(num1){
  var func2 = function(num2){
    return num2 * 2;
  };
  return '결과: ' + func2(num1);
}

console.log(func1(2));
// console.log(func(2)); // 오류 발생. 외부에서 접근할 수 없다.
