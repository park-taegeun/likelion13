import TitleSection from "../components/Homepage/TitleSection";
import IdeathonSection from "../components/Homepage/IdeathonSection";
import ReviewSection from "../components/Homepage/ReviewSection";
import { Container } from "./Homepage.styles";

export default function Homepage() {
    return (
        <Container>
            <TitleSection />
            <IdeathonSection />
            <ReviewSection />
        </Container>
    );
}