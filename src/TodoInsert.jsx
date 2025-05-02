import { useState } from "react";
import styled from 'styled-components';
/**
 * 함수형 컴포넌트 TodoInsert
 * -> 사용자가 입력한 텍스트(할 일)을 App.jsx에 전달하는 역할
 * <필요한 내용>
 * 1) useState로 value 만들기 - 지금 input에 쓰여지고 있는 내용 기억하기 위해
 * 2) <input> 요소 만들기 - 사용자가 글 입력할 수 있게 하기 위해
 * 3) onChange 함수 - input이 바뀔 때마다 value 업데이트
 * 4) <form> & onSubmit 함수 - 사용자가 '추가' 눌렀을 때 입력된 글을 App에 전달
 * 5) 부모(App.jsx)로부터 onInsert(App.jsx의 handleInsert()) props 받기
 * 6) setValue("") - 글 추가하고 나면 입력창 초기화하기 위해서서
 */

const Button = styled.button`
    padding: 8px 16px;
    background-color:rgb(104, 170, 228);
    color: white;
    border: none;
    &:hover {
        background-color: rgb(51, 95, 133);
    }
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #999;
    border-radius: 6px;
    width: 300px;
    font-size: 15px;
`;

const Form = styled.form`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

function TodoInsert({ onInsert }) {
    const [text, setText] = useState("");

    // 이벤트 핸들러 함수 onChange - 함수를 변수처럼 정의하기 위해 const => 사용
    const onChange = (e) => {
        setText(e.target.value);
    };
    /**
     * e = eventObject
     * e.target - 이벤트가 발생한 HTML 요소 그 자체 === <input>
     * e.target.value - <input>태그의 value 속성을 의미 === {text}
     * 
     * <흐름>
     * 입력창에 text 입력 - onChange 함수 실행 - setText로 인해 state 변수(text) 변경 - 변경된 상태로 <input>의 value 속성(text)로 들어감 - 입력창 내용 변경
     */

    // 이벤트 핸들러 함수 onSubmit 
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (text.trim() === "")
            return;

        onInsert(text);
        setText("");
    };
    /**
     * onSubmit
     * 
     * <form> 태그에서 사용되는 이벤트 핸들러 함수 -> 사용자가 form을 제출했을 때 실행
     * 폼에서 제출을 하거나 버튼을 누르면 브라우저는 기본적으로 form을 submit 하려고 한다.
     * HTML에서 form이 submit되면 페이지가 새로고침 -> react에서는 이것을 방지해야 한다.
     * -> e.preventDefault() - 새로고침막기
     * 
     * if (text.trim() === "") - 만약 text에 아무것도 적히지 않았다면 return; - onSubmit 함수를 종료시켜라(추가하지마라)
     * trim() - 앞 뒤 공백을 제거 함수
     * 
     * onInsert(text) - 부모컴포넌트(App)에게 사용자가 입력한 text값 전달
     * -> 즉, onInsert(text)는 App의 handleInsert(text)를 호출해 부모가 전달받은 text를 todos배열에 추가
     * <흐름>
     * 입력창에 input - onSubmit 실행 - onInsert(text) 호출 - App.jsx의 handleInsert(text) 실행 - todos 상태 업데이트(할 일 추가)
     * 
     * setText("") - 입력창 초기화
     */

    return( 
        <Form onSubmit={onSubmit}>
            <Input type="text" value={text} onChange={onChange} placeholder="할 일을 입력하세요" />
            <Button type="submit">추가</Button>
        </Form>
    );
    /**
     * <전체 흐름>
     * 사용자가 <input>에 할 일 입력 -> onChange 함수 실행 - 상태변수(text)값 변경되고 input의 value 속성으로 들어가서 입력창 내용 변경
     * -> 사용자가 추가 혹은 enter 누름 -> form이 제출되어서 onSubmit 함수 실행 -> 공백 검사 후 onInsert(text) 호출
     * -> App: handleInsert(text) 실행 -> 할 일 목록에 추가 -> 입력창 초기화
     */
}

export default TodoInsert;