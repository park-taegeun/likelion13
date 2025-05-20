import Header from "../components/Header/Header";
import FeedbackButtons from "../components/homepage/FeedbackButtons";
import FeedbackCards from "../components/homepage/FeedbackCard";
import ideathonImg from "../assets/images/ideathon.jpg";
import bgImg from "../assets/images/Union.svg";
import {
  MainContainer,
  Section,
  TopText,
  StrongText,
  ImageSection,
  TextBlock,
  BackgroundImage,
  HighlightText,
  HighlightTextBlock,
  Image,
} from "./HomePage.styles";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <TopText>작년부터 진행됐던 아이디어톤, 모두 어땠나요?</TopText>
          <StrongText>여러분들의 생생한 후기가 궁금합니다!</StrongText>
          <FeedbackButtons />
        </Section>
        <ImageSection>
          <TextBlock>
            <BackgroundImage src={bgImg} alt="배경" />
            <HighlightTextBlock>
              <HighlightText>How was your Ideathon?</HighlightText>
              <HighlightText>Please share your opinion !</HighlightText>
            </HighlightTextBlock>
            <p>
              진짜 언젠가 이런 후기 올릴 수 있는 사이트를 디자인 해보면 좋겠다는
              생각이 만들다 보니 드네요. 프론트엔드 모두 화이팅!
            </p>
          </TextBlock>
          <Image src={ideathonImg} alt="Ideathon" />
        </ImageSection>
        <FeedbackCards />
      </MainContainer>
    </>
  );
}