/**
 * try/catch/finally
 * - try 블록에서 return문이 사용되더라도 finally 코드 블록은 반드시 실행 됨.
 * - try/finally, try/catch 만 사용 가능.
 */

try{
    obj.a();
}catch(error){
  console.log("#### 예외 발생 ####");
  console.log("message: " + error.message);
  console.log("name: " + error.name);
  console.log("toString: " + error.toString());
  return;
} finally {
  console.log("## finally 블럭: error와 상관없이 실행 됨.");
}
