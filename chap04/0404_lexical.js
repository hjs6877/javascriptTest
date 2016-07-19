var x = "global";
function func(){
  console.log(x);
  var x = "local";
  console.log(x);
}

func();
