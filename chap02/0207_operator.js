/**
 * 비교 연산자
 */

// "==" 연산자는 두 피연산자의 타입이 다른 경우는 타입을 일치시키고 난 후, 비교한다. 즉, 값을 비교.
var b = (1 == "1");
console.log(b);

// "===" 연산자는 타입 변환을 하지 않고 타입과 값을 모두 비교한다.
var c = (1 === "1");
console.log(c);

var o = "hello world";
var p = new String("hello world");
console.log(o == p); // 값만 비교하므로, true
console.log(o === p); // 값과 타입을 모두 비교하므로, false;

// ==, === 연산자의 피연산자로 객체가 올 경우 두 참조값이 가리키는 메모리상의 객체의 위치가 같다면 true를 반환.
var obj1 = new String("hello");
var obj2 = new String("hello");
console.log(obj1 == obj2);  // 참조값이 서로 틀리므로 false.
console.log(obj1 === obj2); // 참조값이 서로 틀리므로 false.

var a = ["1", "2", "3"];
var b = ["1", "2", "3"];
console.log(a == b);

var a = ["1", "2", "3"];
var b = [a[0], a[1], a[2]];
console.log(a == b);

console.log(["1", "2", "3"] == ["1", "2", "3"]);

var a = new Array(1, 2, 3);
var b = new Array(1, 2, 3);
console.log(a == b);
