import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  color: #1c1c1c;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  font-family: "TT Travels Next Trl";
`;

export const NavDiv = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Item = styled(Link)`
  text-decoration: none;
  color: #a7a7a7;
  font-weight: 500;
  cursor: pointer;

  &.aboutActive {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid black;
  }
  &.projectActive {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid #FF6D79;
  }
  &.diaryActive {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid #01D354;
  }
  &.qnaActive {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid rgb(223, 233, 28);
  }
`;