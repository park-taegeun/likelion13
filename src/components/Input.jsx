import { useState } from "react";
import { useNavigate } from "react-router";
// useNavigate: 페이지 이동을 위한 함수를 React Router에서 가져옴
import styled from "styled-components";

// 함수형 컴포넌트 Input
function Input() {
  const [input, setInput] = useState("");
  // state 변수 input, 값을 업데이트할 함수 setInput, 초기값은 빈 문자열

  // 이벤트 핸들러 함수 - 입력값이 바뀔 때 처리
  function handleChange(e) {
    setInput(e.target.value.trim());
    // 공백 제거해 상태변수 input에 저장
  }

  const navigate = useNavigate(); // 페이지 이동 함수 준비

  return (
    <InputComponent
      type="search"
      placeholder="검색어를 입력하세요."
      value={input}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/search?query=${input}`);
        }
        /**
         * navigate() - React Router의 페이지 이동 함수 == useNavigate() 통해서 얻음
         * navigate("경로")를 실행하면 해당 경로로 즉시 이동함 (새로고침 없이)
         * 
         * ${input}은 현재 사용자가 입력한 검색어 상태 값
         * ex)) 사용자가 input에 "강아지"를 입력 -> navigate("/search?query=강아지")
         * 
         * URL에 쿼리 스트링을 포함함으로써 URL에 데이터를 실어 보낸다.
         */
      }}
    />
  );
}

/**
 * type="search": 검색창 전용 입력 필드
 * placeholder: 입력 전 안내 문구
 * value={input}: 현재 상태값이 input창에 반영됨
 * onChange={handleChange}: 입력이 바뀔 때마다 상태도 변경
 * onKeyDown: 키보드 누를 때마다 실행되는 이벤트
 */

const InputComponent = styled.input`
  all: unset;
  margin-block: 50px;
  width: 32rem;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  font-size: 1rem;
`;
/**
 * 브라우저의 기본 스타일(테두리, 배경, 폰트 등)을 전부 초기화 -> input 요소는 default 값들이 있어서 깔끔하게 디자인하려면 사용
 * 위 아래 간격 조정 - block은 top과 bottom을 합친 거라고 생각
 * 너비 지정
 * 패딩: 위아래, 좌우
 * 모서리를 둥글게
 * 그림자 효과
 * 글자 크기
 */

export default Input;
