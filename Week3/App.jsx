import { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList'   ;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100vw;
    height: 100vh;
    max-width: 400px;
    background: white;
`;

const Title = styled.p`
    font-size: 28px;
    font-weight: bold;
`;

function App() {
    const [todos, setTodos] = useState([]); // state변수 todos, todos변수를 변경가능한 setTodos, todos변수의 초깃값은 빈 배열

    function handleInsert(text) {
        const newTodo = {
            id: Date.now(),
            text,
            checked: false
        }; // newTodo 객체 생성 - 객체가 가지는 3가지 필드: id, text, checked
        setTodos(newTodo, ...todos); // 새로운 항목이 삽입되면 todos가 삽입된 형태에 맞게 변경되어야 하니 setTodos로 변경
    }

    function handleToggle(id) {
        setTodos(todos.map(todo => 
            todo.id == id ? {...todos, checked: !todo.checked} : todo
        ));
    }

    function handleRemove(id) {
        setTodos(todos.filter(todo => 
            todo.id !== id 
        ));
        // filter() -> 조건이 참이면 남기고 거짓이면 제거
        // 위 조건: 찾고 있는 id랑 순회하고 있는 id가 다르다 == 참, 즉 남긴다.
    }

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
}

export default App;