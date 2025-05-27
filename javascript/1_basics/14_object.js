/**
 * Object(객체)
 */
// 객체 선언 -> key : value pair
let yuJin = {
    name: '손흥민',
    group: '토트넘',
    dance: function() { // 객체 안에서 선언된 함수 = 메서드
    // key는 dance, value는 함수
        return `${this.name}이 춤을 춥니다.`; // this -> 메서드가 정의되어있는 객체를 가리킨다.
    }
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '손흥민';

const groupKey = 'group'
const groupValue = '토트넘';

const yuJin2 = {
    [nameKey]: nameValue, // key 값에 변수를 넣고 싶으면 [] 안에 넣으면 된다.
    [groupKey]: groupValue, // value는 상관 없음
    goal: function() {
        return `${this.name}이 골을 넣습니다.`
    }
};
console.log(yuJin2);
console.log(yuJin2.goal());
    
yuJin2['group'] = '맨체스터유나이티드';
console.log(yuJin2);

yuJin2['englishName'] = 'Son Heung Min'; // 존재하지 않았던 키를 넣으면 새로 생성이 된다.
console.log(yuJin2);

delete yuJin2['englishName']; // 삭제
console.log(yuJin2);

/**
 * 객체의 특징
 * 1. const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2. 객체 안의 속성이나 메서드는 변경할 수 있다.
 */
console.log("----------------------");
const wonYoung = {
    name: '장원영',
    group: '아이브',
};
console.log(wonYoung);
//wonYoung = {}; // 객체 자체를 변경 -> 에러

/**
 * 모든 키 값 가져오기
 */
console.log(Object.keys(wonYoung)); // 모든 키 값들이 array 형태로 반환
/**
 * 모든 밸류 값 가져오기
 */
console.log(Object.values(wonYoung)); // 모든 밸류 값들이 array 형태로 반환

const name = '안유진'; // key: value pair

const yuJin3 = {
    name, // name: name, -> 이거랑 같은 코드임, key랑 value가 같은 글자면 하나로 생략 가능능
};
console.log(yuJin3);

