import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px 100px;
  background: #fff;
`;

export const Section = styled.div`
  text-align: center;
`;

export const TopText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const StrongText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 36px;
`;

export const ImageSection = styled.div`
  margin: 80px -100px 80px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
`;

export const TextBlock = styled.div`
  max-width: 500px;
  height: 500px;
  display: flex;
  z-index: 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border-radius: 20px;
  pointer-events: none; /* 이미지 클릭 안 되게 */
`;

export const HighlightTextBlock = styled.div`
  margin-bottom: 27px;
`;

export const HighlightText = styled.p`
  border-radius: 10px;
  color: #1c1c1c;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
`;

export const Image = styled.img`
  width: 800px;
  height: 400px;
  max-width: 100%;
  border-radius: 68px 0px 0px 68px;
  background: linear-gradient(180deg, rgba(254, 254, 254, 0.00) 53.37%, rgba(254, 254, 254, 0.45) 100%), url(<path-to-image>) lightgray 50% / contain no-repeat, #E9E9E9;
`;