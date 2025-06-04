import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LoginPage = () => {
  const [loginUser, setLoginUser] = useState(""); // 로그인 폼에 입력된 닉네임 값 저장하는 상태
  const [loginPass, setLoginPass] = useState(""); // 로그인 폼에 입력된 비밀번호 값 저장하는 상태
  const [sessionId, setSessionId] = useState(""); // 로그인 성공 시, 받아온 세션 ID를 저장하는 상태

  useEffect(() => {
    setSessionId(localStorage.getItem("sessionId"));
  }, []);
  /**
   * useEffect()는 컴포넌트가 화면에 처음 렌더링 될 때 자동으로 실행되는 함수
   * -> 처음 한 번만 실행 // 새로고침하거나 첫 방문 시 실행되는 초기화 코드
   * 
   * 브라우저의 로컬스토리지에서 sessionId라는 키의 값을 가져오는 함수
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4173/login", {
        username: loginUser,
        password: loginPass,
      })
      .then((res) => {
        const sessionId = res.data.sessionId;
        localStorage.setItem("sessionId", sessionId); 
        setSessionId(sessionId);

        alert("로그인 성공!");
      })
      .catch((err) => {
        alert("로그인 실패");
      })
      .finally(() => {
        console.log("Login request finished");
      });
      /**
       * POST 요청 -> 로그인 시도
       * - URL과 BodyData 존재
       * - 서버는 바디 데이터를 받아서 로그인 가능한지 판단하고, 성공 시 sessionId 같은 걸 응답으로 보내줌
       * 
       * res = 서버 응답 전체
       * sessionId 변수에 서버가 보내준 응답 데이터 내 sessionId 필드 저장
       * 로컬 스토리지에 sessionId를 저장 (브라우저에 영구 저장)
       * -> 새로고침하거나 다른 페이지 왔다 가도 로그인 유지 가능
       */
  };

  return (
    <Container>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="아이디"
          value={loginUser}
          onChange={(e) => setLoginUser(e.target.value)}
          required
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
      <p>현재 세션: {sessionId || "없음"}</p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginPage;
