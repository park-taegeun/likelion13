import Input from "../Input/Input";
import TopNavbar from "../TopNavbar/TopNavbar";
import Hlogo from "../../assets/images/H.png";
import {
    Container,
    LogoButton,
    LogoImg,
    ButtonSection,
    SelectButton,
    LoginButton,
    CartButton,
} from "./Header.styles";

export default function Header() {
    return (
        <>
        <Container>
            <LogoButton to="/">
                <LogoImg src={Hlogo} alt="해칭룸 로고" />
            </LogoButton>
            <TopNavbar />
            <Input />
            <ButtonSection>
                <SelectButton>Korea/KRW</SelectButton>
                <LoginButton to="/login">Login</LoginButton>
                <CartButton>Cart</CartButton>
            </ButtonSection>
        </Container>
        </>
    );
}