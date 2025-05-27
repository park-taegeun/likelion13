/**
 * Data Types
 * 여섯 개의 Primitive Type과 한 개의 오브젝트 타입이 있다.
 * 
 * Primitive Type: 1) Number 2) String 3) Boolean 4) Undefined 5) Null 6) Symbol
 * -> 자바스크립트의 타입을 구성하는 가장 작은 단위 ex) 영어에서 a b c ...
 * Object(객체)
 */

const age = 24;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); // number 타입
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------------------')

const codeFactory = '코드팩토리'; // string 타입
console.log(typeof codeFactory);
const ive = "'아이브', '안유진'";
console.log(typeof ive);

/**
 * Template Literal
 * 1) newLine - \n
 * 2) tab - \t
 * 3) 백슬래시를 string으로 표현하고 싶으면 두 번 입력하면 된다.
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backslash = '서경대//박태근';
console.log(backslash);

const iveWonYoung2 = `아이브 ///////***/'' 
장원영`; // ``을 사용하면 안에서 엔터를 치든 탭을 누르든 어떤 문자를 쓰든 다 된다. - Template Literal
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`); // `${}`에서 {}안에 있는 건 변수

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined 타입
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 개발자가 명시적으로 없는 값으로 초기화할 때 사용
 */
let init = null;
console.log(init);
console.log(typeof init); // 자바스크립트에서 null은 object 타입으로 인식되고 있다.

/**
 * Symbol 타입
 * 유일무이한 값을 생성할 때 사용
 * 다른 primitive 값들과 다르게 Symbol 함수를 호출해서 사용
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // =을 3개를 쓰면 왼쪽이 오른쪽과 같냐를 비교

const symbol1 = Symbol('1');
const symbol2 = Symbol('1'); // Symbol()안에 들어간 값은 값은 보존되나 유일무이한 값이라 고유성을 가짐
console.log(symbol1 === symbol2); // 고유성을 가지는 심볼끼리 동일하냐를 비교하는 거니까 false가 나온다.

/**
 * Object 타입
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 * key:value pair
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};
console.log(dictionary);
console.log(dictionary['red']); // []안에 키 값을 넣어주면 해당 키 값에 대응하는 벨류값을 찾아준다.
console.log(dictionary['yellow']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMemeversArray = [
    '안유진', // [0]
    '가울', // [1]
    '레이', // [2]
    '장원영', 
    '리즈',
    '이서', // [5]
];
console.log(iveMemeversArray);
console.log(iveMemeversArray[0]);
iveMemeversArray[0] = '박태근'; // 값 변경
console.log(iveMemeversArray[0]);
console.log(typeof iveMemeversArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * js -> dynamic typing 이유: 개발자가 선언할 때 let, const, var만 사용하기 때문에
 */