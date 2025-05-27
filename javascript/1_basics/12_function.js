/**
 * function - 함수
 */
function calculate(number) {
  // 파라미터 number
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(2); // argument 2

/**
 * Parameter 함수에서 입력받는 값 == 함수로 들어오는 값
 * Argument 실제 입력하는 값 == 함수로 전달하는 값
 */

function multiply(x, y) {
  // 파라미터 x, y
  console.log(x * y);
}
multiply(2, 4); // 아규먼트 2, 4

function multiply(x, y = 10) {
  // 여기서 y를 default Parameter
  console.log(x * y);
}
multiply(2);

/**
 * return 받기
 */
console.log("--------------------");

function multiply(x, y) {
  return x * y; // 함수 안에서 작업한 값을 함수 밖에서 받을 수 있음
}
const result1 = multiply(2, 5);
console.log(result1);

const result2 = (4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
console.log("--------------------");
const multiply2 = (x, y) => {
  // arrow 함수 선언
  return x * y;
};
console.log(multiply2(2, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(8, 5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}
console.log(multiply6(3)(4)(5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("----------------");
console.log(multiplyThree(4, 5, 6)); // 4는 0번째 아규먼트, 5는 1번째 아규먼트, 6은 2번째 아규먼트

const multiplyAll = function (...arguments) {
  // ...args는 몇 개 들어올 지 모를 때 받기 좋음, 들어오는 대로 다 받는 놈
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object); // instance 좌측에 있는 것이 오른쪽과 같은 타입이냐?
// function은 Object이다.
