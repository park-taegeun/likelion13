import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import data from "../data";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  /**
   * React Router의 Hook인 useSearchParams()를 사용해서 현재 URL의 쿼리 문자열을 읽는다
   * searchParams.get("query")는 URL에서 query=강아지라면 "강아지" 문자열을 반환
   * setSearchParams()는 필요하면 URL 쿼리를 수정 가능
   */

  // 검색 결과
  const result = Object.keys(data)
    .filter((query) => query.includes(searchParams.get("query")))
    .flatMap((query) => data[query]);
  /**
   * 1. Object.keys(data)
   * - data는 객체로 구성 -> data.js안의 객체들
   * - Object.keys - 객체의 키 값들만 배열로 가져옴
   * 
   * 2. .filter((query) => query.includes(searchParams.get("query")))
   * - 각 키 값을 돌면서 현재 URL에서 얻은 검색어가 포함된 키만 남긴다
   * ex)) URL이 /search?query=강일 경우 → "강아지"는 "강"을 포함하니까 통과됨, "고양이"는 제거
   * 
   * 3. .flatMap((query) => data[query])
   * - filter를 통과한 키들에 해당하는 값을 가져오고, 전부 한 배열로 펼침
   * - flatMap()은 [ [1,2], [3,4] ] → [1,2,3,4]로 만드는 함수
   * - 즉, 여러 가지의 배열을 하나의 배열로 합침 -> 이게 'result'
   */

  console.log(result);

  return (
    <>
      <Message>검색 결과: {result.length}건</Message>
      <Results>
        {result.map((result) => (
          <Result key={result.id}>
            <Title href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </Title>
            <Content>{result.content}</Content>
          </Result>
        ))}
      </Results>
    </>
  );
}

const Message = styled.span`
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Results = styled.div`
  margin-top: 50px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

const Result = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 30px;
  transition: transform 250ms ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.025);
  }
`;

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.span`
  font-weight: 500;
`;

export default Search;
