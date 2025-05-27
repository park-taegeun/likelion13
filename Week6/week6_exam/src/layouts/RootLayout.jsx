import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Layout,
    Content,
} from "./RootLayout.styles";

export default function RootLayout() {
    return (
        <Layout>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    );
}