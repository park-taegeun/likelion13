import BottomNavbar from "./BottomNavbar";
import {
    Container,
    Logo,
} from "./Footer.styles";

export default function Footer() {
    return (
        <Container>
            <Logo>HATCHINGROON</Logo>
            <BottomNavbar />
        </Container>
    );
}