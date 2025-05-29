import Pagination from "../components/HomePage/Pagination";
// import { clothes } from "../data/clothes";
// import ClothesCard from "../components/HomePage/ClothesCard";
import {
    Container,
    // ClothesList,
} from "./HomePage.styles";

export default function HomePage() {
    return (
        <Container>
            {/* <ClothesList>
                ClothesCard 매핑
            </ClothesList> */}
            상품 리스트 보여질 공간
            <Pagination />
        </Container>
    );
}