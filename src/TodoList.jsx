import styled from 'styled-components';
/**
 * TodoList.jsx 구성 내용
 * 
 * 1) todos props - App이 넘겨준 할 일 목록 배열
 * 2) onToggle props - 체크 여부를 변경하는 함수
 * 3) onRemove props - 삭제하는 함수
 * 4) todos.map() - 목록을 하나씩 <li>로 반복해서 보여줌
 * 5) 체크박스 <input type = "checkbox"> 완료 여부 토글
 * 6) 삭제버튼 <button>
 */

const Button = styled.button`
  background-color: rgb(234, 92, 92);
  &:hover {
    background-color: rgb(193, 36, 36);
  }
  border: none;
  color: white;
  padding: 8px 20px;
  font-size: 16px;
  border-radius: 8px;
`;

const Span = styled.span`
  flex: 1;
  font-size: 16px;
`;

const Li = styled.li`
  background: white;
  border-radius: 10px;
  padding: 8px 16px;
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  width: 100%;
  max-width: 400px;
  padding: 0;
  margin-top: 13px;
  list-style: none;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

// 함수형 컴포넌트 TodoList - props로 todos, onToggle, onRemove 받는다.
function TodoList({ todos, onToggle, onRemove }) {
    return (
        <Ul>
          {todos.map(todo => (
            <Li key={todo.id}>
              <Input
                type="checkbox"
                checked={todo.checked}
                onChange={() => onToggle(todo.id)}
              />
              <Span>{todo.text}</Span>
              <Button onClick={() => onRemove(todo.id)}>삭제</Button>
            </Li>
          ))}
        </Ul>
      );
    /**
     * 각 목록<li>을 id 속성을 이용해서 분리 - 각 목록 구성 요소 == 체크박스, 텍스트, 삭제 버튼
     * onToggle이 호출되면 App.jsx에서 handleToggle 실행된다. -> checked 값이 토글되고 이 값은 todo.checked 값에 반영된다.
     * {todo.text}로 todos 배열 중 할 일 불러오기 
     * 삭제 버튼 - <button>, onClick={() => : 클릭했을 때만 실행}- onRemove 함수 호출 및 파라미터로 todo.id 넘겨주기
     */
}

export default TodoList;