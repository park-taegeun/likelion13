import {
    Container,
    Page,
} from "./BottomNavbar.styles";

export default function BottomNavbar() {
    return (
        <Container>
            <Page>ARCHIVECO+</Page>
            <Page>Information</Page>
            <Page>Privacy Policy</Page>
            <Page>Agreements</Page>
        </Container>
    );
}