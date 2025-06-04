// 회원 가입 페이지
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterPage = () => {
  const [email, setEmail] = useState(""); // 이메일 입력 값
  const [username, setUsername] = useState(""); // 닉네임 입력 값
  const [password, setPassword] = useState(""); // 비밀번호 입력 값
  const [usernameAvailable, setUsernameAvailable] = useState(null); // 닉네임 사용 가능 여부
  /**
   * useState 사용 -> 각각의 입력 필드 값 관리
   */

  const navigate = useNavigate(); // 라우팅 이동을 위한 설정 단계

  // [ 닉네임 중복 확인 함수 ]
  const checkUsername = () => {
    if (username.trim().length === 0) return alert("닉네임을 입력해주세요.");
    // 사용자가 공백이나 빈 문자열을 입력했을 때 경고 반환

    axios
      .get("http://localhost:4173/check-username", { params: { username } }) 
      .then((res) => {
        setUsernameAvailable(!res.data.exists); 
      })
      .catch((err) => {
        setUsernameAvailable(false);
      })
      .finally(() => {
        console.log("Username check finished");
      });
      /**
       * GET 요청 전송
       * - 서버에 GET /check-username?username=xxx 요청을 보냄
       * - params는 GET 요청에서 쿼리 스트링 형태로 전달
       * -> GET 요청은 본문을 가질 수 없기 때문에 요청에 필요한 데이터는 쿼리 스트링으로 전달
       * 
       * res = axios가 서버로부터 받아온 전체 응답(Response) 객체
       * res.data = 서버가 응답으로 직접 보낸 데이터 (res 내부)
       * 
       * !res.data.exists
       * - 사용자가 작성한 이름이 서버 내에 존재하면 exists: true 반환
       * - 존재하면 Available(false)가 되어야 함 -> !사용
       */
  };

  const register = () => {
    if (!email || !username || !password || !usernameAvailable) {
      alert("모든 항목을 확인해주세요");
      return;
    }
    /**
     * 입력값 확인 (유효성 검사)
     * - 사용자가 폼을 제출했을 때 모든 필드를 제대로 채웠는지 확인
     * - 하나라도 문제가 있으면 경고 메시지 띄우고 함수 중단
     */

    axios
      .post("http://localhost:4173/register", { email, username, password }) 
      .then((res) => {
        if (res.data.success) alert("회원가입 성공!");
        navigate("/login");
      })
      .catch((err) => {
        alert("회원가입 실패");
      })
      .finally(() => {
        console.log("회원가입 요청 완료.");
      });
      /**
       * axios.post() = 서버에게 새 데이터를 생성해달라고 요청하는 함수 (create)
       * Body 데이터: { email, username, password } -> 이 객체가 전송
       * 
       * res.data 객체 내 sucess 필드가 true면 회원가입 성공
       * - sucess 필드: 백엔드에서 만들어서 응답으로 보내주는 값
       * navigate로 로그인 페이지로 이동
       */
  };

  return (
    <Container>
      <h2>회원가입</h2>
      <Input
        placeholder="이메일"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="아이디"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={checkUsername}>아이디 중복 확인</Button>
      {usernameAvailable != null && (
        <Message available={usernameAvailable}>
          {usernameAvailable ? "사용 가능한 아이디입니다" : "이미 사용 중인 아이디입니다"}
        </Message>
      )}
      <Input
        placeholder="비밀번호"
        type="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={register}>회원가입</Button>
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background-color: #218838;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.available ? "green" : "red")};
`;

export default RegisterPage;
