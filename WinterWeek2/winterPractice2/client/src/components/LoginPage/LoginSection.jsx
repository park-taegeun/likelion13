import InputInfo from "./InputInfo";
import {
    Container,
    NaverOrKakao,
    NaverButton,
    KakaoButton,
} from "./LoginSection.styles";

export default function LoginSection() {
    return (
        <Container>
            <InputInfo />
            <NaverOrKakao>
                <NaverButton>Naver Login</NaverButton>
                <KakaoButton>Kakao Login</KakaoButton>
            </NaverOrKakao>
        </Container>
    );
}