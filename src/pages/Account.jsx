/**
 * /account 경로 렌더링 페이지
 * 본인 이름, 프로필 사진, 기본 정보
 * 이름 변경 페이지 이동 링크
 */

import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import profileImg from "../assets/profileImg.jpg";

function Account() {
    const originalName = localStorage.getItem("userName") || "박태근";
    /**
     * localStorage
     * - 브라우저가 제공하는 클라이언트 측 저장 공간
     * - 문자열 형태로 key - value pair로 저장
     * 
     * localStorage.getItem("userName")
     * - 저장공간에 userName의 value 값을 가져와라
     * 
     * || "박태근"
     * - 없다면 기본 default 값인 "박태근"
     * 
     * vs useState
     * - useState
     * -> 실시간 사용자 입력 관리 목적
     * -> 앱 새로고침 시 초기값으로 돌아감
     * 
     * - localStorage
     * -> 데이터 장기 보관 목적(앱 껐다 켜도 유지)
     */
    
    return(
        <ProfileDiv>
            <Card imageUrl={profileImg}>
                <h2 style={{ color: "white", margin: 0, fontSize: 15}}>Profile</h2>
            </Card>
            <Info>
                <NameDiv>
                    <Name>[이름] <Span>{originalName}</Span></Name>
                    <EditLink to="/account/edit">이름 변경</EditLink>
                </NameDiv>
                <phoneNumber>[전화번호] 010-9930-3186</phoneNumber>
                <Email>[이메일] taegeun1234@naver.com</Email>
                <Sns>[instagram] <a href="https://www.instagram.com/_xorms/?hl=ko" className="instaLink">@_xorms</a></Sns>
            </Info>
        </ProfileDiv>
    );
}

const ProfileDiv = styled.div`
 display: flex;
 flex-direction: column;
 alingn-items: center;
 gap: 10px;
`;

const Info = styled.div`
padding: 8px;
`;

const NameDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const Name = styled.p`
 color: #666;
 margin-bottom: 15px;
`;

const Span = styled.span`
font-weight: bold;
color: black;
`;

const Email = styled.p`
margin-bottom: 20px;
`;

const Sns = styled.p`
  color: #666;

  a.instaLink {
    color: #e1306c;
    text-decoration: none;

    &:hover {
      color:rgb(189, 37, 37);
    }
  }
`;

const EditLink = styled(Link)`
  display: inline-block;
  margin-top: 4px;
  padding: 4px 8px;
  background-color:rgb(82, 161, 246);
  color: white;
  font-size: 14px;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background-color:rgb(16, 122, 237);
    color: white;
  }
`;

export default Account;