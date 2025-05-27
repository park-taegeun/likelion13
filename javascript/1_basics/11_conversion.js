/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
console.log("-------------------");
let age = 24; // 타입: number
console.log(typeof age);
//명시적
let stringAge = age.toString(); // 타입 string으로 변환
console.log(typeof stringAge, stringAge);

let test = age; // 타입: number
let test2 = age + ""; // 타입: string -> 숫자에다가 글자를 더하니 타입이 변환된다.
console.log(typeof test);
console.log(typeof test2);
console.log("98" + 2); // 98 - string 타입 + 2 -> 2가 string타입으로 변환되어서 합쳐짐
console.log("98" - 2); // string에는 -연산이 없으니 98이 number타입으로 되어서 96이 나옴.
console.log("98" + "2"); // 이렇게 사용해야 선임에게 안 맞음 ㅋㅋ 헷갈리게 쓰지마라!! - 항상 같은 타입끼리 operator을 사용하라.

/**
 *
 */

console.log("--------------------");
console.log(typeof (99).toString()); // 명시적 변환(String)
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

console.log(typeof parseInt("0"), parseInt("0")); // 명시적 변환(Int) - 문자 0을 숫자 0으로 변환
console.log(typeof parseFloat("0.99"), parseFloat("0.99")); // 명시적 변환(Float)
console.log(typeof +"1", +"1"); // 문자 앞에 +나 -을 붙이면 number로 변환된다.

/**
 * Boolean 타입으로의 변환
 */
console.log("--------------------------");
console.log(!!"x"); // String 안에 값이 들어있으면 Boolean 기준으로 보았을 때 true이다.
console.log(!"x"); // !을 붙이는 거는 Boolean으로 변환해주는 것
console.log(!!""); // !을 2개 붙이면 원래 값인데 String 안에 아무 값도 없으니 false라고 인식
console.log(!!0); // !2개 - 원래값- 0 - false
console.log(!!"0"); // !2개 -원래 값 - String 안에 값 존재 - true
console.log(!!"false"); // !2개 - 원래 값 - String 안에 값 존재 - true
console.log(!!false); // !2개 - 원래 값 - false - false
console.log(!!undefined); // !2개 - 원래 값 - undefined - false
console.log(!!null); // !2개 - 원래 값 - null - false

console.log(!!{}); // !2개 - 원래 값 - object(key-value 쌍) - true
console.log(!![]); // !2개 - 원래 값 - array - true

/**
 * 1. 아무 글자도 없는 String
 * 2. 값이 없는 경우(undefined, null)
 * 3. 0
 * 모두 false로 반환된다.
 */
