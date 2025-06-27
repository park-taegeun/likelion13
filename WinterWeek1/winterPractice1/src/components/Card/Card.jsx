import mimoticon1 from "../../assets/images/미모티콘1.png";
import mimoticon2 from "../../assets/images/미모티콘2.png";
import mimoticon3 from "../../assets/images/미모티콘3.png";
import {
    Container,
    MimoticonSection,
    Mimoticon,
    ImgText,
    TextBox,
    MainText,
    SubText,
} from "./Card.styles";

export default function Card() {
    return (
        <Container>
            <MimoticonSection>
                <Mimoticon src={mimoticon1} alt="미모티콘1" />
                <ImgText className="mimo1">정말 최고의 경험!</ImgText>
                <TextBox>
                    <MainText>진짜 완전 백퍼 진심</MainText>
                    <SubText>
                        힘들긴 해도 그만큼의 보람이 있었어요. <br />
                        여러분들도 그랬나요?
                    </SubText>
                </TextBox>
            </MimoticonSection>
            <MimoticonSection>
                <Mimoticon src={mimoticon2} alt="미모티콘2" />
                <ImgText className="mimo2">저 진짜 한 번 더하고 싶어요</ImgText>
                <TextBox>
                    <MainText>이건 백퍼 진심은 아님</MainText>
                    <SubText>
                        한 번 더하기엔 몸이 버티질 못할 것 같아요. <br />
                        중앙톤 열심히 해야지!
                    </SubText>
                </TextBox>
            </MimoticonSection>
            <MimoticonSection>
                <Mimoticon src={mimoticon3} alt="미모티콘3" />
                <ImgText className="mimo3">밤샘의 가치가 있다</ImgText>
                <TextBox>
                    <MainText>요건 80퍼센트 진심</MainText>
                    <SubText>
                        밤샘은 건강에 좋지 않기 때문입니다. <br />
                        밤샘하지 않도록 미리미리 작업합시다!
                    </SubText>
                </TextBox>
            </MimoticonSection>
        </Container>
    );
}