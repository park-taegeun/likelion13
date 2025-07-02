import {
    Container,
    TextSection,
    SubText,
    MainText,
    ButtonSection,
    Button,
} from "./TitleSection.styles";

export default function TitleSection() {
    return (
        <Container>
            <TextSection>
                <SubText>저번 주에 진행 되었던 아이디어톤, 모두 어떠셨나요?</SubText>
                <MainText>여러분들의 생생한 후기가 궁금합니다!</MainText>
            </TextSection>
            <ButtonSection>
                <Button>텍스트 후기 작성</Button>
                <Button>이미지 후기 작성</Button>
                <Button>소감문 제출(PDF)</Button>
            </ButtonSection>
        </Container>
    ); 
}