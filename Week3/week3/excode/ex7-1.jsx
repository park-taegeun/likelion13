import { useState } from "react";

function Counter() {
// 최상위 부모 함수형 컴포넌트 Counter
    const [count, setCount] = useState(0);
    // 초기값인 0인 state변수 count를 만들고 값 변경 함수인 setCount 포함

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
    // button을 누르면 setCount(count + 1)을 통해 count 값을 1 증가시킨다.
    // -> 상태 변경 -> 컴포넌트 렌더링
    // () => : '버튼을 클릭했을 때만'의 효과를 준다, 만약 setCount만 사용하면 버튼을 누르기도 전에 값이 증가함
    // 그래서 이걸 쓰기 싫으면 아예 handleClick()같은 함수를 만들어서 사용할 수도 있다.
}

export default Counter;