import {
    Container,
    TitleSection,
    Logo,
    Title,
} from "./QnaPage.styles";
import QnaLogo from "../assets/images/QnaLogo.png";
import QnaSection from "../components/QnaPage/QnaSection";

export default function QnaPage() {
    return (
        <Container>
            <TitleSection>
                <Logo src={QnaLogo} alt={"Qna 로고"}/>
                <Title>Q&A</Title>
            </TitleSection>
            <QnaSection />
        </Container>
    );
}