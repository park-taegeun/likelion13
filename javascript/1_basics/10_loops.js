/**
 * Loops
 * 1) for 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("-----------------------");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("-------------------------");
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}
console.log("------------------------");
//*을 이용해서 6x6의 정사각형을 출력해라
let square = "";
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}

console.log(square);

/**
 * for...in
 */
const yujin = {
  name: "안유진",
  year: 2003,
  group: "아이브",
}; // 오브젝트 선언

console.log("---------------------");
for (let key in yujin) {
  console.log(key); // 키 값을 받을 수 있다
}

console.log("------------------------");
const iveMembersArray = ["안유진", "레이", "가을", "장원영", "리즈", "이서"]; // 리스트 선언
for (let key in iveMembersArray) {
  console.log(key); // 인덱스 값을 받을 수 있다
  console.log(`${key}:${iveMembersArray[key]}`); // 백틱으로 문자열을 감싸고 ${}안에 변수명을 써주면 값을 출력할 수 있다.
}

/**
 * for...of
 */
console.log("---------------------");
for (let value of iveMembersArray) {
  // 리스트에서 사용 가능
  console.log(value); // 값을 가져올 수 있다
}

/**
 * While
 */
console.log("--------------------");
let number = 0;

while (number < 10) {
  number++;
  console.log(number);
}

/**
 * do..while (안 쓰는 거 추천)
 */
number = 0;

do {
  number++;
} while (number < 10); // do-while은 조건 판단 전에 무조건 한 번은 실행

console.log(number);

/**
 * break
 */
console.log("---------------------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // i 가 5라면
    break; // loop을 break
  }
  console.log(i);
}
console.log("-------------------");

number = 0;
while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}

/**
 * continue
 */
console.log("------------------------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    // i가 5라면
    continue; // 현재 loop을 종료하고 다음 loop으로 가라
  }
  console.log(i);
}

console.log("-------------------------");
number = 0;
while (number < 10) {
  number++; // number을 여기서 증가시켜주지 않고 밑에서 증가시켜주면 number가 5일 때 조건으로 넘어가는데 변화가 없으니 무한루프에 빠지게 됌
  if (number === 5) {
    continue;
  }
  console.log(number);
}
