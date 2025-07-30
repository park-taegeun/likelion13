import styled from 'styled-components';

export const OverlayBox = styled.div`
  position: fixed; // 모달을 화면에 고정 - 스크롤을 움직여도 항상 같은 위치
  top: 0;
  left: 0; // 화면의 좌측 상단(0, 0)를 시작 위치로 설정
  width: 100vw; // 너비를 화면 전체 너비로 설정
  height: 100vh; // 높이를 화면 전체 높이로 설정
  background: rgba(0, 0, 0, 0.5); // 배경색 - 반투명 검은 배경
  display: flex; // 내부 요소 정렬
  flex-direction: column; // 정렬 방향 - 세로
  justify-content: center; // 가로 가운데 정렬
  align-items: center; // 세로 가운데 정렬
  z-index: 1000; // 모달이 다른 요소보다 위에 오게 설정
`;

export const ModalContainer = styled.div`
  width: 336px;
  background-color: white;
  padding: 24px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleSectionContainer = styled.div``;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleIcon = styled.p`
  font-weight: bold;
  background-color: rgba(219, 210, 210, 1);
  color: black;
  padding: 7px 12px;
  border-radius: 15px;
  font-size: 15px;
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  cursor: pointer;
`;

export const CloseButtonImg = styled.img`
  flex-shrink: 0;
`;

export const TitleText = styled.p`
  font-weight: bold;
  margin-top: 11px;
  width: 100%;
  color: #17171b;
  font-size: 20px;
`;

export const NameSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const SubTitle = styled.p`
  font-weight: bold;
  color: #17171b;
  font-size: 15px;
`;

export const MeetInput = styled.input`
  margin-top: 5px;
  width: 100%;
  height: 24px;
  border: none;
  padding: 0;
  outline: none;
  font-size: 20px;
  font-weight: 800;

  &::placeholder {
    color: #bcbcbc;
    font-size: 20px;
    font-weight: 800;
  }
`;

export const ParticipantSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 249px;
  height: 32px;
  margin-top: 5px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  background: #f6f6f6;
  font-size: 12px;
  outline-style: none;

  &::placeholder {
    color: #bcbcbc;
    text-align: center;
  }
`;

export const ParticipantSearchButton = styled.button`
  background-color: black;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SearchButtonImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const TimeSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const SelectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DateSelectSection = styled.div`
  display: flex;
`;

export const DateInput = styled.input`
  width: 120px;
  padding: 7px 13px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  background: #f6f6f6;
  font-size: 12px;
  color: #bcbcbc;
`;

export const Dash = styled.p`
  padding: 0 20px;
  font-size: 35px;
  color: #bcbcbc;
  display: flex;
  align-items: center;
`;

export const TimeSelectSection = styled.div`
  display: flex;
`;

export const TimeInput = styled.input`
  width: 120px;
  padding: 7px 13px;
  text-align: center;
  border-radius: 100px;
  border: 1px solid #bcbcbc;
  background: #f6f6f6;
  font-size: 12px;
  color: #bcbcbc;
`;

export const TimeLengthSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const TimeShowSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 66px;
  margin-top: 8px;
`;

export const TimeTextSection = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TimeText = styled.p`
  color: #bcbcbc;
  font-size: 20px;
  font-weight: 800;
`;

export const HourText = styled.p`
  color: #bcbcbc;
  font-size: 15px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PlusButton = styled.button``;
export const MinusButton = styled.button``;
export const ButtonImg = styled.img`
  cursor: pointer;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.button`
  width: 288px;
  height: 40px;
  padding: 9.5px 79.5px;
  border-radius: 15px;
  background: #17171b;
  color: #f6f6f6;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(79, 77, 77, 1);
  }
`;
