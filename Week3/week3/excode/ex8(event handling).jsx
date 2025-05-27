import { useState } from "react";

function App() {
// 최상위 함수형 부모 컴포넌트 App
    const [name, setName] = useState("");
    // 초기값이 ""인 상태변수 name을 선언하고 setName으로 값 변경할 수 있게 함함

    function handleChange(e) {
        setName(e.target.value);
    }
    // e는 이벤트 객체이고 e.target.value는 현재 input에 입력된 값
    // 입력창에 타이핑을 하면 그 값(name)이 실시간으로 업데이트된다.

    return (
        <div>
            <h1>Event handler practice</h1>
            <input type="text" value={name} onChange={handleChange} />
            <button onClick={() => alert(name)}>Button</button>
            <h3>{name}</h3>
        </div>
    );
    // <div>로 하나의 요소로 묶어준다.
    // <input>으로 인해 입력창이 생기고 입력창의 값이 name상태로 설정된다, onChange로 인해 input에 글자를 입력하면 handleChange 함수가 실행됨
    // -> setName으로 인해 상태 변경 -> 컴포넌트 렌더링
    // <button onClick={() => alert(name)}> 버튼 클릭 시, 현재 name 값을 alert로 보여준다.
}

export default App;