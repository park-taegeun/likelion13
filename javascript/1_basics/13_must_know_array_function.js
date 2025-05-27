/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);

//push() - array 맨 끝에 항목을 추가할 수 있음 -> 배열 내 항목을 직접 변경할 수 있음
iveMembers.push("코드팩토리");
console.log(iveMembers);
console.log(iveMembers.push("박태근")); // 배열에 '박태근'을 추가한 후 배열 내 항목 수(배열의 길이)를 반환

console.log("----------------------");
//pop() -> 배열의 맨 마지막 항목을 꺼내온다.(끝 값 삭제 후 반환 기능)
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("--------------------");
//shift() -> 배열의 첫번째 항목을 꺼내온다.(첫 값 삭제 후 반환 기능)
console.log(iveMembers.shift());
console.log(iveMembers);

console.log("------------------------");
//unshift() -> 배열의 첫 번째에 값을 넣을 수 있음
console.log(iveMembers.unshift("안유진")); // 항목 추가한 후 배열 길이 반환
console.log(iveMembers);

console.log("---------------------------");
//splice() - 파라미터 2개
console.log(iveMembers.splice(0, 3)); // 배열의 0번째 인덱스부터 3개의 항목 추출 후 배열로 반환
console.log(iveMembers);

console.log("-------------------------");
let realmadrid = ["호날두", "베컴", "베일", "아자르", "음바페", "벨링엄"];
console.log(realmadrid);

//concat()
console.log(realmadrid.concat("피구")); // realmadrid 배열의 끝에 '피구'항목을 붙여서 새로운 배열을 만든 후 반환 -> 기존 배열을 수정하는 것이 아님.
console.log(realmadrid);

//slice()
console.log(realmadrid.slice(0, 3)); // 배열의 0번 인덱스부터 3-1번 인덱스까지 잘라서 새로운 배열을 만든 후 변환 -> 기존 배열 수정 아님
console.log(realmadrid); // 기존 배열 그대로

//spread operator
console.log("--------------------------");
let realmadrid2 = [...realmadrid]; // 리스트를 벗겨서 리스트는 하나만 존재, ...으로 만들어진 배열을 새로운 배열임임
console.log(realmadrid2);

let realmadrid3 = [realmadrid]; // 이러면 리스트 안에 리스트가 들어감
console.log(realmadrid3);

let realmadrid4 = realmadrid;
console.log(realmadrid4);

console.log(realmadrid === realmadrid4);
console.log([...realmadrid] === realmadrid); // false - spread operator(...)으로 하면 새로운 배열이 만들어지는 거임 == 저장되는 메모리 공간 자체가 다름름

//join() - 모든 값을 string 형태로 엮을 때 사용용
console.log("------------------------------");
console.log(realmadrid.join()); // 콤마를 기준으로 string 형태로 쭉 나온다
console.log(typeof realmadrid.join()); // String type
console.log(realmadrid.join("/")); // join()함수에서 괄호 안의 문자로 string 형태가 나뉘어서 출력된다.
console.log(realmadrid.join(", "));

//sort() - 정렬
console.log("-----------------------------");
realmadrid.sort(); // 오름차순 정렬 - 기존 배열 변경
console.log(realmadrid);
console.log(realmadrid.reverse()); // 거꾸로 정렬

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
  return a > b ? 1 : -1; // a가 b보다 크면 1을 반환하고 작으면 -1을 반환해라
});
console.log(numbers);

/**
 * sort() 함수는 배열에서 두 값을 비교하면서 어떤 순서로 정렬할 지 결정 -> 이 두 값이 a, b이다.
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환 => return 1 또는 100같이 양수를 반환하면 js는 b를 먼저 놓고 a를 놓을게~라고 판단
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환 => 음수를 반환하면 js는 a를 먼저 놓고 b를 놓을게~라고 판단
 * 3) 원래 순서를 그대로 두려면 0을 반환 => 0을 반환하면 정렬에 영향을 안 준다.
 */

numbers.sort((a, b) => a > b ? -1 : 1); // a가 b보다 크면 -1을 반환하고 작으면 1을 반환해라
console.log(numbers);

// map() - map 함수는 모든 값들을 순회한다.
console.log('------------------------');
console.log(realmadrid.map((x) => x)); // x는 array에 있는 값들이 하나씩 들어가면서 반환값으로 대체 / 여기서는 입력값 == 반환값이기 때문에 그대로 나온다.
console.log(realmadrid.map((x) => `레알마드리드: ${x}`)); // 예를 들어 호날두가 x로 들어가면 반환값으로 '레알마드리드: 호날두'

console.log(realmadrid.map((x) => {
  if(x === '호날두') { // x가 호날두일떄만
    return `레알마드리드: ${x}`; // 레알마드리드: 호날두로 변환환
  }else{
    return x;
  }
}));
console.log(realmadrid); // map함수는 원래 배열을 건드는 것이 아니다.

// filter() - map함수와 마찬가지로 모든 값을 순회하면서 변수에 넣어주는데 true를 반환하면 filter의 반환값에 들어가게 되고 false면 안 들어가게 된다.
console.log('------------------------------');
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true)); // ture를 무작정 반환 - 배열이 그대로 다 나온다.
console.log(numbers.filter((x) => false)); // false를 무작정 반환 - 배열에 아무것도 안 들어있다.

// 만약 짝수만 필터하고 싶다?
console.log(numbers.filter((x) => x % 2 === 0)); // x % 2 === 0이 true인 x 값만 반환해라.

// find() - 똑같이 값을 순회하면서 반환값이 true인 값만 반환해주는데 순서대로 보다가 해당되는 첫 번째 값만 반환 - array 형태도 아님(filter와 다른 점)
console.log(numbers.find((x) => x % 2 === 0));

//findIndex() - find에서 나오는 반환 값의 Index 값을 반환
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce( , 초깃값) 
numbers = [1, 8, 7, 6, 3]
console.log(numbers.reduce((p, n) => p + n, 0));
/**
 * 설명
 * reduce()는 파라미터로 2개를 받는다 - ( , 초깃값)
 * console.log(numbers.reduce((p, n) => p + n, 0));
 * 위 코드에서 초깃값은 0
 * 1. 초깃값 0이 p에 입력된다.
 * 2. numbers array의 첫 번째 값인 1이 n에 입력된다.
 * 3. p + n 즉, 0+1의 결과값인 1이 반환된다.
 * 4. (3)에서 반환한 값인 1이 p에 입력된다.
 * 5. array의 두 번째 값인 8이 n에 입력된다.
 * 6. p + n 즉, 1+8의 결과값인 9가 반환된다.
 * 7. (6)에서 반환한 값인 9가 n에 입력된다.
 * 8. numbers list의 모든 값들을 다 순회할 때까지 반복한다 - 결국 모든 값을 다 더한 25가 반환된다.
 */