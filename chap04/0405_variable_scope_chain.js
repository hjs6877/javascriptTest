var x = 1;
function outer(){
  var y = 2;
  var x = 3;
  inner();
  function inner(){
    var z = 3;
    var a = x;

    console.log(a);
  }
}

outer();
