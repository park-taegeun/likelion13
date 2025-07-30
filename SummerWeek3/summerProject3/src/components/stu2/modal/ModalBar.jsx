import { useState, useEffect } from 'react';
import {
  OverlayBox,
  TitleSectionContainer,
  TopSection,
  TitleIcon,
  CloseButton,
  CloseButtonImg,
  TitleText,
  NameSectionContainer,
  SubTitle,
  MeetInput,
  ParticipantSectionContainer,
  SearchSection,
  SearchInput,
  ParticipantSearchButton,
  SearchButtonImg,
  TimeSectionContainer,
  SelectSection,
  DateSelectSection,
  DateInput,
  Dash,
  TimeSelectSection,
  TimeInput,
  TimeLengthSectionContainer,
  TimeShowSection,
  TimeTextSection,
  TimeText,
  HourText,
  ButtonSection,
  PlusButton,
  ButtonImg,
  MinusButton,
  SubmitButtonContainer,
  SearchButton,
} from './ModalBar.styles';
import closebutton from '@icons/ModalcloseButton.png';
import searchbutton from '@icons/SearchButtonImg.png';
import plusbutton from '@icons/PlusButton.png';
import minusbutton from '@icons/MinusButton.png';

export default function ModalBar({ children }) {
  return <>{children}</>;
}

function Overlay({ children, onClose }) {
  return <OverlayBox onClick={onClose}>{children}</OverlayBox>;
}

function TitleSection({ onClose }) {
  return (
    <TitleSectionContainer>
      <TopSection>
        <TitleIcon>약속시간 탐색</TitleIcon>
        <CloseButton onClick={onClose}>
          <CloseButtonImg src={closebutton} alt="닫기 버튼" />
        </CloseButton>
      </TopSection>
      <TitleText>약속시간을 탐색해보세요</TitleText>
    </TitleSectionContainer>
  );
}

function NameSection() {
  return (
    <NameSectionContainer>
      <SubTitle>약속명</SubTitle>
      <MeetInput placeholder="약속명을 입력해주세요" />
    </NameSectionContainer>
  );
}

function ParticipantSection() {
  const [nickname, setNickname] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleSearchClick = () => {
    if (nickname.trim().length === 0) return;

    if (participants.includes(nickname)) {
      alert('이미 추가된 닉네임입니다.');
      return;
    }

    setParticipants((prev) => [...prev, nickname]);
    setNickname('');
  };

  return (
    <ParticipantSectionContainer>
      <SubTitle>참여자</SubTitle>
      <SearchSection>
        <SearchInput
          placeholder="친구의 플랜팔 닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <ParticipantSearchButton onClick={handleSearchClick}>
          <SearchButtonImg src={searchbutton} alt="검색 버튼" />
        </ParticipantSearchButton>
      </SearchSection>
    </ParticipantSectionContainer>
  );
}

function TimeSection() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (startDate && endDate && startDate >= endDate) {
      alert('날짜 설정이 잘못되었습니다.');
    } else if (
      startDate &&
      endDate &&
      startDate === endDate &&
      startTime &&
      endTime &&
      startTime >= endTime
    ) {
      alert('시간 설정이 잘못되었습니다.');
    }
  }, [startDate, endDate, startTime, endTime]);

  return (
    <TimeSectionContainer>
      <SubTitle>약속 가능 시간</SubTitle>
      <SelectSection>
        <DateSelectSection>
          <DateInput
            type="date"
            placeholder="YY.MM.DD"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <Dash>-</Dash>
          <DateInput
            type="date"
            placeholder="YY.MM.DD"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </DateSelectSection>
        <TimeSelectSection>
          <TimeInput
            type="time"
            placeholder="AM 00:00"
            value={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
          <Dash>-</Dash>
          <TimeInput
            type="time"
            placeholder="AM 00:00"
            value={endTime}
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </TimeSelectSection>
      </SelectSection>
    </TimeSectionContainer>
  );
}

function TimeLengthSection() {
  const [time, setTime] = useState(0);

  const handlePlusClick = () => {
    setTime((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    setTime((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const formatTime = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <TimeLengthSectionContainer>
      <SubTitle>약속 길이</SubTitle>
      <TimeShowSection>
        <TimeTextSection>
          <TimeText>{formatTime(time)}</TimeText>
          <HourText>h</HourText>
        </TimeTextSection>
        <ButtonSection>
          <PlusButton onClick={handlePlusClick}>
            <ButtonImg src={plusbutton} alt="플러스 버튼" />
          </PlusButton>
          <MinusButton onClick={handleMinusClick}>
            <ButtonImg src={minusbutton} alt="마이너스 버튼" />
          </MinusButton>
        </ButtonSection>
      </TimeShowSection>
    </TimeLengthSectionContainer>
  );
}

function SubmitButton({ onClose }) {
  return (
    <SubmitButtonContainer>
      <SearchButton onClick={onClose}>약속시간 탐색하기</SearchButton>
    </SubmitButtonContainer>
  );
}

ModalBar.Overlay = Overlay;
ModalBar.TitleSection = TitleSection;
ModalBar.NameSection = NameSection;
ModalBar.ParticipantSection = ParticipantSection;
ModalBar.TimeSection = TimeSection;
ModalBar.TimeLengthSection = TimeLengthSection;
ModalBar.SubmitButton = SubmitButton;
