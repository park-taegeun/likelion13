import Input from "../Input/Input";
import TopNavbar from "../TopNavbar/TopNavbar";
import Hlogo from "../../assets/images/H.png";
import {
    Container,
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
            <LogoImg src={Hlogo} alt="해칭룸 로고" />
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