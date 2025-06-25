import Navbar from "../Navbar/Navbar";
import Input from "../Input/Input";
import {
    Container,
    Logo,
} from "./Header.styles";

export default function Header() {
    return (
        <Container>
            <Logo>IDT</Logo>
            <Input />
            <Navbar />
        </Container>
    );
}