import { useState } from "react";
import searchimg from "../../assets/images/돋보기.png"
import {
    Container,
    SearchImg,
    InputSection,
    SearchButton,
} from "./Input.styles";

export default function Input() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <Container>
            <SearchImg src={searchimg} alt="돋보기 이미지" />
            <InputSection 
                type="search"
                placeholder="키워드를 입력하세요."
                value={text}
                onChange={handleChange}
            />
            <SearchButton>☞</SearchButton>
        </Container>
    );
}