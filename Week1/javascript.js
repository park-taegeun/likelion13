alert("이 메세지가 보이면 파일 연결에 성공한 것이에요!");

let age= 24; // 변경 가능한 변수
const birthyear= 2002; // 변경 불가능한 변수

console.log("안녕하세요, 저는 박태근입니다.");
console.log("나이는", age, "살입니다.")
console.log(birthyear);
/*console은 브라우저가 제공하는 도구로, 다양한 기능을 제공*/
/*conslole.log()는 그 도구 중 하나로 텍스트나 값을 콘솔창에 출력하는 역할*/

function sayHello() {
    console.log("나이:", age, "생년:", birthyear);
}
sayHello();