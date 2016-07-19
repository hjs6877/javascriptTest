function MainFunc(){
  LibraryFunc(1, 2, function(result){
    console.log('합계: ' + result);
  });
}

function LibraryFunc(num1, num2, callback){
    var sum = num1 + num2;
    callback(sum);
}


MainFunc();
