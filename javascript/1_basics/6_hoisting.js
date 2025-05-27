/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('--------------------');

console.log(name); // undefined가 나온다. -> 
var name = '박태근';
console.log(name);

var name2;
console.log(name2);
name2 = '박태근';
console.log(name2);
/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

console.log(yujin);
let yujin = '안유진'; // const와 let 둘 다 hoisting이 발생함.
/* 이 상태에서 출력하면 에러 -> 에러메시지: ReferenceError: Cannot access 'yujin' before initialization
변수를 초기화시키기 전에는 접근할 수 없다. 즉, "let과 const는 값을 미리 가져오는 걸 방지할 수 있음"-> 이게 var을 사용하는 이유(못 막아줘 얘는)*/
