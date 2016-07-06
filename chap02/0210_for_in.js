/**
 * for ~ in
 * for(변수 in 객체){
 * 	실행코드 블럭
 * }
 */

// 객체일 경우, 객체의 속성이 prop 변수에 할당된다.
var obj = {p1: 'a', p2: 'b'}
var result="";
for(var prop in obj){
  result += '속성명: ' + prop + ', 값: ' + obj[prop] + '\n';
}
console.log(result);

// 배열일 경우, 배열의 인덱스가 index 변수에 할당 된다.
var a = ['a', 'b']; // 배열 객체 정의
var result = '\n';
for(var index in a){
  result += '인덱스: ' + index + ', 요소값: ' + a[index] + '\n';
}
console.log(result);

// 객체의 속성명이 arr 배열의 각 인덱스의 공간에 바로 할당 된다.
var obj = {p1:1, p2: 2};
var arr = [];
var i = 0;
for(arr[i++] in obj);
console.log(arr);
