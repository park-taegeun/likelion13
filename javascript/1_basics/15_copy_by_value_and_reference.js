/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value, primitive = object 빼고 나머지
 * 2. 객체는 copy by reference
 */
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);

clone += ' 안유진입니다';
console.log("----------------------");
console.log(clone);
console.log(original);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("-----------------------");
originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj = {
    name: '박태근',
    group: '토트넘',
};
cloneObj = {
    name: '박태근',
    group: '토트넘',
};
console.log(originalObj === cloneObj);// false - Obj안의 값이 같다고 같은게 아니다.

/**
 * <copy by value> - primitive
 * let original = '안녕하세요'; -> original 변수에 새로운 메모리 할당
 * let clone = original; -> 값을 복사해서 clone이라는 변수에 새로운 메모리 할당당
 * clone += ' 박태근입니다'; -> clone이라는 변수가 저장된 메모리 공간의 값 변경
 * 
 * <copy by reference> - object
 * let originalObj = { name: 손흥민, group: 토트넘, }; -> originalObj는 어떤 메모리 공간을 가리키고 있고 그 공간에 객체 값을 저장장
 * let cloneObj = originalObj; -> originalObj에 저장되어 있는 값을 cloneObj에 대입 == cloneObj가 originalObj와 같은 곳을 가리키게 된다다
 * originalObj['group'] = '첼시'; -> originalObj의 값(객체가 가리키는 공간의 값값) 변경 -> cloneObj도 가리키고 있기 때문에 orignalObj와 cloneObj의 값 둘 다 동시에 변경
 */

// test
const yuJin1 = { // 객체 - a(임의 메모리공간)를 가리킴
    name: '안유진',
    group: '아이브',
};
const yuJin2 = yuJin1; // 객체 yuJin2도 a를 가리킴 == copy by reference
const yuJin3 = { // 객체 yuJin3은 b(a와 다른 새로운 메모리 공간)를 가리킴
    name: '안유진',
    group: '아이브',
};

console.log("----------------------");
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

console.log("-----------------------");
/**  
 * Spread Operator - 똑같은 값을 갖고 있는 array나 Object를 copy by value로 완전히 새로운 값으로 복사 가능능
 */
const yuJin4 = {
    ...yuJin3,
}; // copy by value - yuJin4라는 새로운 객체를 생성하고 값을 복사한 거라
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003, // 값 추가 가능
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '장원영', // spread Operator은 순서가 중요, 여기서 name을 초기화 해봤자자
    ...yuJin3, // 다시 여기서 덮어진다.
};
console.log(yuJin6);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2); // Spread Operator은 위치가 굉장히 중요.

console.log('-------------------');
const soccer = {
    player1: '손흥민',
    player2: '메시',
    player3: '호날두',
    number: 4,
    goal: function() {
        return `${this.player1}선수가 ${this.number}개의 골을 넣었습니다.`;
    }
};
console.log(soccer);
console.log(soccer.goal());