import { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from "./TodoInsert.jsx";
import TodoList from './TodoList.jsx';

// 스타일 컴포넌트 Container - <div>
const Container = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100vw;
    height: 100vh;
    max-width: 400px;
    background: #f7f3e5;
`;
/**
 * display: flex; - 이 요소를 flexbox 형태로 변환 - 요소들의 위치나 정렬을 쉽게 관리하기 용이
 * flex-direction: column; - 요소들이 세로방향(위에서 아래로) 나열
 * align-items: center; - flex-direction이 column이면 가로 중앙 정렬(좌우 가운데 배치) / flex-direction이 row면 세로 중앙 정렬(위아래 가운데 배치)
 * padding: 20px; - 요소의 내부 여백을 의미 - 콘텐츠와 요소의 경계 사이 여유공간 표현
 * width: 100vw; - 요소의 너비를 화면의 100%로 설정
 * height: 100vh; - 요소의 높이를 화면의 100%로 설정
 * max-width: 400px; - 요소의 최대 너비를 400px로 제한
 */

// 스타일 컴포넌트 Title - <p>
    const Title = styled.p`
        font-size: 28px;
        font-weight: bold;
    `;

// 최상위 부모 함수형 컴포넌트 - App
function App() {
    const [todos, setTodos] = useState([]); // 초기값이 [](빈 배열)인 state 변수 todos 선언 및 setTodos로 값 변경 가능
    
    // 이벤트 핸들러 함수 hanleInsert - 항목 삽입 역할
    function handleInsert(text) { // 파라미터 text - 사용자가 입력한 할 일
        console.log("할 일 추가됨:", text);
        const newTodo = { // 객체 생성 - newTodo
            id: Date.now(),
            text,
            checked: false
        }; // 객체가 가지는 3가지 필드(id, text, checked)
        setTodos([newTodo, ...todos]); // setTodos - 기존 상태(todos 배열)에 새로운 항목 newTodo를 맨 앞에 추가
        // ...todos - 기존 배열의 요소 나열
    }
    
    // 이벤트 핸들러 함수 handleToggle - 체크 여부 바꿔주는 역할    
    function handleToggle(id) { // 파라미터 id - 각 Todo는 고유한 id로 구별 -> id 값을 통해 각 Todo를 찾을 수 있다.
        // map 함수 - 배열의 요소를 순회하면서 각각의 요소를 변형하여 새로운 배열 생성 - 원본 배열(todos)는 변경하지 않고 새로운 배열 반환(불변성)
        setTodos(todos.map(todo =>
            // todo => - todos 배열 내 각 객체를 나타내는 파라미터를 todo라고 명명.
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
            // 현재 순회하고 있는 todo 항목의 id와 클릭한 id 비교 ? 같으면 체크 상태를 변경 : 다르면 변경없이 반환
            // ...todo - 기존 Todo 객체 속성을 모두 복사하여 가져옴 -> 기존 속성을 가져오고 checked 속성만 바꾸기 위해서서
            // checked: !todo.checked - 속성 반전
        ));
        // setTodos - 상태 변화로 컴포넌트 리랜더링
    }

    // 이벤트 핸들러 함수 handleRemove - 항목 삭제 역할
    function handleRemove(id) { // 파라미터 id
        // filter 함수 - 특정 조건을 만족하는 요소(참인 요소)만 골라 새로운 배열 생성 - 원본 배열 불변성 유지
        setTodos(todos.filter(todo => todo.id !== id));
        // todos 배열 순회하면서 각 객체를 todo라고 명명. == 배열 안의 각 요소에 어떤 동작을 할까? 
        // 현재 객체(요소)의 id가 다르면(true) 남기고 같으면(false) 제거  -> id가 같은 항목(삭제하고 싶은 항목)은 제거된 새로운 배열 생성
    }
    // setTodos - 상태 변화로 컴포넌트 리랜더링

    return (
        <Container>
            <Title>TodoList</Title>
            <TodoInsert onInsert={handleInsert} />
            <TodoList 
                todos={todos}
                onToggle={handleToggle} 
                onRemove={handleRemove}
            />
        </Container>
    );
    /**
     * <TodoInsert onInsert={handleInsert} /> : App.jsx에서 정의한 handleInsert 함수를 onInsert로 이름만 바꿔서 TodoInset.jsx에 전달
     * <TodoList />에서
     * todos = {todos} - App.jsx에서 정의한 todos배열을 todos라는 이름 그대로 TodoList.jsx에 전달
     * onToggle = {handleToggle} - App.jsx에서 정의한 handleToggle 함수를 onToggle로 이름만 바꿔서 TodoList.jsx에 전달
     * onRemove = {handleRemove} - App.jsx에서 정의한 handleRemove 함수를 onRemove로 이름만 바꿔서 TodoList.jsx에 전달
     */
}

export default App;
