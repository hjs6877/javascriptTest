// 메인 함수
function MainFunc(){
  LibraryFunc(1, 2, CallbackFunc);
}

// 콜백 함수
function CallbackFunc(result){
  console.log('합계: ' + result);
};

// 라이브러리 함수
function LibraryFunc(num1, num2, callback){
  // 작업 수행..
  var sum = num1 + num2;
  // 콜백 호출..
  callback(sum);
}

MainFunc();
