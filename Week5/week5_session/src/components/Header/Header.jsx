import { Container, Logo, NavDiv, Item } from "./Header.styles.js";
import { useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    const isPage = location.pathname === "/project";

    return(
        <Container $isProjectPage={isPage}>
            <Logo>IDT</Logo>
            <NavDiv>
                <Item to ="/" className={location.pathname === "/" ? "aboutActive" : ""}>About</Item>
                <Item to="/project" className={location.pathname === "/project" ? "projectActive" : ""}>Project</Item>
                <Item to="/diary" className={location.pathname === "/diary" ? "diaryActive" : ""}>Diary</Item>
                <Item to="/qna" className={location.pathname === "/qna" ? "qnaActive" : ""}>QnA</Item>
            </NavDiv>
        </Container>
    );
}

/**
 * to = "경로" -> 페이지 이동 방법
 * 이 때, 경로 이름을 라우트.jsx 파일에서 설정한 경로 이름과 같게 해주어야 함
 */