/**
 * or, and 연산자
 *
 */

// 좌측이 true이면 우측을 평가하지 않고, 좌측 값을 반환 하며, 좌측이 false이면 우측값을 반환한다.
var result1 = (1+2) || {};
var result2 = null || "우측 값을 반환";
var result3 = null || undefined;
console.log("result1: " + result1);
console.log("result2: " + result2);
console.log("result3: " + result3);

// 좌측이 true가 아니면 우측값을 평가하지 않는다.
var result4 = null && true;
var result5 = false && "새우깡";
console.log("result4: " + result4);
console.log("result5: " + result5);

// 좌측이 true이면 우측 값을 반환한다.
var result6 = true && "양파링";
var result7 = "감자깡" && "양파링";
console.log("result6: " + result6);
console.log("result7: " + result7);
