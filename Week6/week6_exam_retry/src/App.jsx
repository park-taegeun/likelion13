import './App.css';
import EventSection from './components/EventSection';
import {
  TitleSection,
  Title,
  TitleButton,
} from "./App.styles";

export default function App() {
  return (
    <>
      <TitleSection>
        <Title>
          안녕하세요, <br />
          멋쟁이사자처럼입니다.
        </Title>
        <TitleButton>멋사 바로가기</TitleButton>
      </TitleSection>
      <EventSection />
    </>
  );
}

/**
 * App.jsx
 * - 라우팅 경로가 index element 즉, 상위 경로일 때 보여질 페이지
 */