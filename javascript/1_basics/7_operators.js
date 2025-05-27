/**
 * Operators
 * 연산자
 */
/**
 * 산술연산자
 * 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지
 */
console.log(10 + 52);
console.log(10 % 10);

console.log(10 * (10 + 40));

/**
 * 증가와 감소
 */
let num = 1;
num++;
console.log(num);
console.log("---------------------");

let result = 1;
console.log(result);
result = num++; // num에 1이 더해지기 전에 result = num이 먼저 실행.
console.log(result, num);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = "99"; // string 타입
console.log(+sample);
console.log(typeof +sample); // number 출력 -> string에 number가 될 수 있는 값이 있다면 +를 주었을 때 number 타입으로 변환된다.

console.log(typeof sample); // string 출력 -> 원래 값이 변하진 않는다.

sample = true; // boolean 타입
console.log(+sample);
console.log(typeof +sample); // 마찬가지로 number타입으로 변환 잘 됌.

sample = "안유진";
console.log(+sample); // NaN 출력: Not a Number

sample = 99;
console.log(-sample); // -를 붙이면 -가 붙어서 나온다.
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 == "5");
console.log(0 == ""); // =을 2개만 쓰면 값만 비교된다. 즉, 타입은 알아서 맞춰짐

console.log(5 === 5);
console.log(5 === "5"); // =을 3개를 쓰면 값 뿐 아니라 타입도 비교된다. >> 더 좋은 방법임

console.log("----------------");
console.log(5 != 5);
console.log(0 != "");
console.log(5 !== "5"); // !== 은 값과 타입까지 비교

/**
 * 대소 관계 비교 연산자
 */
console.log("-----------------------");
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 * 물음표를 기준으로 조건을 넣고 :을 기준으로 왼쪽은 참일 때 오른쪽은 거짓일 때
 */
console.log("------------------------------");
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 * &&(and) ||(or)
 */
console.log("----------------------------");
console.log(true && true);
console.log(false || true);
console.log(false || false);

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

/**
 * 단축 평가(short circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환 
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환 -> '앤좌프좌'
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환 -> '오좌트좌'
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 * **공식 : 좌측값을 반환하려면 and를 사용했을 때는 좌측 값이 false여야 하고 or을 사용했을 때의 좌측값은 true여야 한다.
 */
console.log("----------------------------");
console.log(true || "아이브"); // or을 사용했는데 좌측 값이 true -> 좌측 값 반환
console.log(false && "아이브"); // and를 사용했는데 좌측 값이 false -> 좌측 값 반환
console.log(false || "아이브"); // or을 사용했는데 좌측 값이 false -> 우측 값 반환
console.log(true && "아이브"); // and를 사용했는데 좌측 값이 true -> 우측 값 반환
console.log(true && true && "아이브"); // 오른쪽부터 실행 -> and 사용 좌측 true -> 우측 반환, and 사용 좌측 true 우측 반환
console.log(true && false && "아이브"); // and 사용 좌측 false 좌측 반환, and 사용 좌측 true 우측 반환

/**
 * 지수 연산자
 */
console.log("----------------------------");
console.log(2 ** 2);
console.log(2 ** 3);
console.log(10 ** 3);

/**
 * null 연산자
 */
console.log("-----------------------");
let name; // name에 undefined 들어가있음 - 정의되지않음
console.log(name);
name = name ?? "코드팩토리"; // ?? 사용 -> 좌측 값이 null이거나 undefined일 때 우측 값을 반환해라.
console.log(name);
name = name ?? "아이브"; // ?? 사용 -> 좌측 값이 null 이나 undefined 아님 -> 그대로 반환
console.log(name);
let name2;
name2 ??= "코드팩토리"; // name2 = name ?? "코드팩토리" 이 코드와 동일 코드드
console.log(name2);
