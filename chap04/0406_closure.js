function outer(){
  var a = 10;
  return function(){
    return ++a;
  }
}

var a = 1;
var func = outer();

console.log(func());
