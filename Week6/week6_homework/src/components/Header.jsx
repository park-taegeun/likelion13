import Input from "./Input";
import TopNavbar from "./TopNavbar";
import {
    Container,
    Logo,
    ButtonSection,
    SelectButton,
    LoginButton,
    CartButton,
} from "./Header.styles";

export default function Header() {
    return (
        <>
        <Container>
            <Logo>H</Logo>
            <TopNavbar />
            <Input />
            <ButtonSection>
                <SelectButton>Korea/KRW</SelectButton>
                <LoginButton>Login</LoginButton>
                <CartButton>Cart</CartButton>
            </ButtonSection>
        </Container>
        </>
    );
}