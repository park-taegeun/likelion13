import {
    Container,
    BackImg,
    TextSection,
    MainText,
    SubText,
    IdeathonImg,
} from "./IdeathonSection.styles"
import union from "../../assets/images/Union.png";
import ideathon from "../../assets/images/ideathon.jpg";

export default function IdeathonSection() {
    return (
        <Container>
            <BackImg src={union} alt="배경 이미지" />
            <TextSection>
                <MainText>
                    How was your Ideathon? <br />
                    Please share your opinion!
                </MainText>
                <SubText>
                    진짜 언젠가 이런 후기 올릴 수 있는 사이트를 디자인하면 좋겠다는 <br />
                    생각이 만들다보니 드네요. 프론트엔드 모두 화이팅!
                </SubText>
            </TextSection>
            <IdeathonImg src={ideathon} alt="아이디어톤" />
        </Container>
    );
}