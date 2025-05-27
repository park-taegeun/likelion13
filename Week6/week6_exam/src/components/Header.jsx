import {
    MainContainer,
    Logo,
    Button,
} from "./Header.styles";

export default function Header() {
    return (
        <MainContainer>
            <Logo>LIKELION</Logo>
            <Button>로그인</Button>
        </MainContainer>
    );
}