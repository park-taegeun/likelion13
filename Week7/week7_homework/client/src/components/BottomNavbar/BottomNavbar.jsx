import {
    Container,
    Page,
} from "./BottomNavbar.styles";

export default function BottomNavbar() {
    return (
        <Container>
            <Page style={{ marginLeft: "25px" }}>ARCHIVECO+</Page>
            <Page>Information</Page>
            <Page>Privacy Policy</Page>
            <Page>Agreements</Page>
        </Container>
    );
}