import EventSection from "../components/EventSection"
import {
    MainSection,
    MainText,
    Button,
} from './HomePage.styles';

export default function HomePage() {

  return (
    <>
      <MainSection>
        <MainText>안녕하세요,</MainText>
        <MainText>멋쟁이사자처럼입니다.</MainText>
        <Button>멋사 바로가기</Button>
      </MainSection>
      <EventSection />
    </>
  )
}

/**
 * HomePage.jsx
 * - 라우팅 경로가 index 즉, 상위 경로(/)일 때 보여질 페이지지
 */