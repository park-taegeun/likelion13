import {
    Container,
    Page,
} from "./TopNavbar.styles";

export default function TopNavbar() {
    return (
        <Container>
            <Page>Shop</Page>
            <Page>Lookbook</Page>
            <Page>Coming Soon</Page>
            <Page>Information</Page>
        </Container>
    );
}