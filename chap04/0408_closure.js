function outer(){
  var x = 1;
  return function(){
    return ++x;
  }
}

var func1 = outer();
console.log(func1());
console.log(func1());

var func2 = outer();
console.log(func2());
console.log(func2());
