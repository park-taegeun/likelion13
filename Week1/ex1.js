function greetUser() {
    let name = document.getElementById("nameInput").value;
    // document.getElementById(): HTML문서에서 특정 요소를 찾는 JavaScript 함수
    // document: 웹 페이지 전체를 나타내는 객체 -> 우리가 보고 있는 웹 페이지 자체를 document라고 생각하면 됌.
    // getElementById(): document에서 특정 id를 가진 HTML요소를 찾아내는 함수 -> 단 하나의 요소만 찾아낼 수 있음(id는 고유하기 때문에)
    // document.getElementById("nameInput"): HTML에서 <input> 태그의 id="nameInput" 이라는 요소를 찾습니다.
    // .value: 사용자가 <input> 안에 입력한 값을 가져옵니다.

    if (name == "") { // 입력값이 없다면
        alert("이름을 입력해주세요."); // 경고메세지 출력
        return; // 종료
    }

    let message = "안녕하세요," + name + "님!"; // message 변수에 인사메시지 저장

    document.getElementById("greeting").textContent = message;
    // document.getElementById("greeting"): <div id="greeting"></div> 를 찾습니다.
    // .textContent = message;: 그 <div> 안에 message 라는 문장을 표시합니다.
    document.getElementById("nameInput").value = "";
    // value = "" 는 입력값을 빈 값으로 설정한다는 뜻입니다
}

greetingDiv.style.display = "block";       // 숨겨진 메시지 보이게 하기
greetingDiv.style.opacity = "1";           // 투명도를 완전히 보여줌 (0 ~ 1)
greetingDiv.style.transform = "scale(1)";  // 크기를 원래 크기로 설정