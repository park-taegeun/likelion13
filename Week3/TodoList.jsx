function TodoList( {todos, onToggle, onRemove} ) {
    return (
        todos.map(todo => {
            return(
                <li key={todo.id}> 
                    <input type="checkbox" checked={todo.checked} onChange={() => onToggle(todo.id)} />
                    <span>{todo.text}</span>
                    <button onClick={() => onRemove(todo.id)}>삭제</button>
                </li>
            );
        })
    );
}

export default TodoList;