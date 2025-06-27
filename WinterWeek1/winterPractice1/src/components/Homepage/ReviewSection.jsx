import Card from "../Card/Card";
import icon from "../../assets/images/icon.png";
import {
    Container,
    IconImg,
    TitleSection,
    MainText,
    SubText
} from "./ReviewSection.styles";

export default function ReviewSection() {
    return (
        <Container>
            <IconImg src={icon} alt="아이콘 이미지" />
            <TitleSection>
                <MainText>성실히 후기를 작성 해주신 분들에게는!</MainText>
                <SubText>딱히 별 건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성 부탁합니다.</SubText>
            </TitleSection>
            <Card />
        </Container>
    );
}