import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react-router-dom";
import TodoList from "../components/HomePage/TodoList";
import TodoInsert from "../components/HomePage/TodoInsert";
import {
    HPContainer,
    Title,
} from "./HomePage.styles";

export default function HomePage() {
    const [todolist, setTodos] = useState([]);
    
    function handleInsert(text) {
        const newTodo = {
            id: Date.now(),
            text,
            checked: false,
        }
        setTodos([newTodo, ...todolist]);
    }

    function handleToggle(id) {
        setTodos(todolist.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        ));
    }

    function handleRemove(id) {
        setTodos(todolist.filter(todo => 
            todo.id !== id
        ));
    }

    return (
        <>
        <Header />
        <HPContainer>
            <Title>TodoList</Title>
            <TodoInsert onInsert={handleInsert} />
            <TodoList 
                todolist={todolist}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        </HPContainer>
        <Footer />
        </>
    );
}