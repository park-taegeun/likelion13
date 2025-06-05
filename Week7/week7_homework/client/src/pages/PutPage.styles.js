import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

export const FormSection = styled.form` 
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 16px;
`;

export const EditButton = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 80px;

  &:hover {
    background-color: #388e3c;
  }
`;
