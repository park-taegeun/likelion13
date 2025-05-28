import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    InputSection,
} from "./Input.styles";

export default function Input() {
    const [text, setText] = useState("");
    // const navigate = useNavigate();

    function handleChange(e) {
        setText(e.target.value);
    }

    // function handleKeyDown(e) {
    //     if (e.key === "Enter")
    //         navigate(`/search?query=${text}`);
    // }

    return (
        <InputSection
            type="search"
            placeholder="Search..."
            value={text}
            onChange={handleChange}
            // onKeyDown={handleKeyDown}
        />
    );
}