import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: start;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    margin-bottom: 50px;
`;

export const ClotheImg = styled.img`
    width: 360px;
    height: 540px;
`;

export const ClotheNamePriceDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
`;

export const ClotheName = styled.p`
    text-decoration: underline;
    font-weight: 600;
`;

export const ClothePrice = styled.p`
    font-weight: 600;
`;

export const ClotheColor = styled.p`
    text-decoration: underline;
    font-weight: 600;
`;

export const EditButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #e0e0e0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
  width: 360px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #888;
    color: white;
  }
`;