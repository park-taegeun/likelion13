import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Title,
    InputForm,
    Input,
    FindMy,
    Text,
    Button,
    LoginOrJoin,
    LoginButton,
    JoinButton,
} from "./InputInfo.styles";

export default function InputInfo() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePwChange = (e) => {
        setPw(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 시도 되었음');
        navigate("/");
    };

    return (
        <Container>
            <Title>Login</Title>
            <InputForm onSubmit={handleSubmit}>
                <Input type="text" placeholder="ID" value={id} onChange={handleIdChange} />
                <Input type="password" placeholder="PW" value={pw} onChange={handlePwChange} />
                <FindMy>
                    <Text>Find My</Text>
                    <Button>ID</Button>
                    <Button>PW</Button>
                </FindMy>
                <LoginOrJoin>
                    <LoginButton type="submit">Login</LoginButton>
                    <JoinButton>Join</JoinButton>
                </LoginOrJoin>
            </InputForm>
        </Container>
    );
}