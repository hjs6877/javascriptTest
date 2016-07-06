/**
 * throw 문
 * - 특정 조건이 만족되면 코드에서 직접 예외를 발생키시고자 할 경우 사용.
 */
var result = true;
try{
  if(result){
    throw new Error("예외가 발생했습니다.");
  }
}catch(error){
  console.log(error.message);
}

try{
  if(result){
    throw "또 예외가 발생했네요.";
  }
}catch(error){
  console.log(error);
}

try{
  if(result){
    throw 4;
  }
}catch(error){
  console.log(error);
}
