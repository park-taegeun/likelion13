import Header from "../components/Header/Header";
import redPoint from "../assets/images/redPoint.png"
import dogDiary from "../assets/images/댕댕일기.png";
import travAI from "../assets/images/travAI.png";
import Airang from "../assets/images/아이랑.png";
import talkSick from "../assets/images/톡식.png";
import kim from "../assets/images/김비서.png";
import kkobuk from "../assets/images/꼬북.png";
import FrameOut from "../assets/images/FrameOut.png";
import TPOcket from "../assets/images/TPOcket.png";
import {
    MainContainer,
    TitleWrapper,
    PointImg,
    Title,
    SubTitle,
    ImgWrapper,
    Section,
    ProjectImg,
} from "./ProjectPage.styles";


export default function ProjectPage() {
    return (
        <>
            <Header />
            <MainContainer>
                <TitleWrapper>
                    <PointImg src={redPoint} alt='포인트 이미지' />
                    <Title>Project</Title>
                </TitleWrapper>
                <SubTitle>
                    2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요! <br />
                    모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
                </SubTitle>
                <ImgWrapper>
                    <Section>
                        <ProjectImg src={dogDiary} alt='댕댕일기'/>
                        <ProjectImg src={travAI} alt='travAI'/>
                    </Section>
                    <Section>
                        <ProjectImg src={Airang} alt='아이랑'/>
                        <ProjectImg src={talkSick} alt='톡식'/>
                    </Section>
                    <Section>
                        <ProjectImg src={kim} alt='김비서'/>
                        <ProjectImg src={kkobuk} alt='꼬북'/>
                    </Section>
                    <Section>
                        <ProjectImg src={FrameOut} alt='FrameOut'/>
                        <ProjectImg src={TPOcket} alt='TPOcket'/>
                    </Section>
                </ImgWrapper>
            </MainContainer>
        </>
    );
}