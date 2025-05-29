import {
    Container,
} from "./LoginPage.styles";
import LoginSection from "../components/LoginPage/LoginSection";
// import NonMemberSection from "../components/LoginPage/NonMemberSection";

export default function LoginPage() {
    return (
        <Container>
            <LoginSection />
            {/* <NonMemberSection /> */}
        </Container>
    );
}