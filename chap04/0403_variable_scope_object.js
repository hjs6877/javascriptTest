function func1(a, b){
  var c = 2;
  console.log(c)
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + c;
}

func1(2, 3, 4)
