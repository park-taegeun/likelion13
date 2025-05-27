export default function TodoList({ todolist, onToggle, onRemove }) {
    return (
        <Ul>
            {todolist.map(todo =>
                (
                    <Li key={todo.id}>
                        <Input type="checkbox" checked={todo.checked} onChange={() => onToggle(todo.id)} />
                        <Span>{todo.text}</Span>
                        <Button onClick={() => onRemove(todo.id)}>삭제</Button>
                    </Li>
                )
            )}
        </Ul>
    );
}