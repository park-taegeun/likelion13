/**
 * /account/edit 경로에서 렌더링
 * 이름 변경 후 저장 누르면 다시 내 계정 첫 페이지로 이동
 * 변경된 이름이 뜨도록 구현
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function EditAccount() {
    const navigate = useNavigate();

    const [name, setName] = useState(localStorage.getItem("userName") || "");
    // localStorage.getItem("userName") - 브라우저에 저장된 userName을 가져오는데 없다면 null 값 반환

    // 입력란 변경 핸들러 함수
    const handleChange = (e) => {
        setName(e.target.value);
    };

    // 폼 제출 핸들러 함수
    const handleSubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem("userName", name); 
        navigate("/account"); // account 페이지로 이동
    };
    /**
     * e.preventDefault(); - form이 제출되면 기본적으로 새로고침 되는 것을 방지
     * 
     * localStorage.setItem("userName", name);
     * - 사용자가 입력한 name 값을 브라우저 저장소에 userName이라는 이름으로 저장
     * 
     * navigate("/account");
     * - 저장을 마친 뒤 /account 페이지로 이동시킴
     * - 새로고침이 아니라 SPA 방식으로 이동
     */

    return (   
        <Container>
            <Title>이름 변경</Title>
            <Form onSubmit={handleSubmit}>
                <LabelDiv>
                    <Label>새 이름: </Label>
                    <Input type="text" value={name} onChange={handleChange} required />
                </LabelDiv>
                <Button type="submit">저장</Button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  gap: 12px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 300px;
`;

const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 212px;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EditAccount;