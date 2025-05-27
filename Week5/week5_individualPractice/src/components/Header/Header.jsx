import {
    HeaderContainer,
    Logo,
    NavDiv,
    Item,
} from "./Header.styles";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <HeaderContainer>
            <Logo>PTG</Logo>
            <NavDiv>
                <Item to="/" className={location.pahtname === "/" ? "todoActive" : ""}>Todo</Item>
                {/* <Item to="/calendar" className={location.pahtname === "/calendar" ? "calendarActive" : ""}>Calendar</Item> */}
                {/* <Item to="/qna" className={location.pahtname === "/qna" ? "qnaActive" : ""}>Qna</Item> */}
            </NavDiv>
        </HeaderContainer>
    );
}