import { useLocation } from "react-router-dom";
import {
    Container,
    Button,
} from "./Navbar.styles";

export default function Navbar() {
    const location = useLocation();

    return (
        <Container>
            <Button to="/" className={location.pathname === "/" ? "about" : ""}>About</Button>
            <Button to="/project" className={location.pathname === "/project" ? "project" : ""}>Project</Button>
            <Button to="/diary" className={location.pathname === "/diary" ? "diary" : ""}>Diary</Button>
            <Button to="/qna" className={location.pathname === "/qna" ? "qna" : ""}>QnA</Button>
        </Container>
    );
}