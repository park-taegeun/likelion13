import Pagination from "../components/HomePage/Pagination";
import { clothes } from "../data/clothes";
import ClothesCard from "../components/HomePage/ClothesCard";
import {
    Container,
    ClothesList,
} from "./HomePage.styles";

export default function HomePage() {
    return (
        <Container>
            {/* 토글 구현 부분 */}
            <ClothesList>
                {clothes.map(clothe => (
                    <ClothesCard 
                        key={clothe.id}
                        name={clothe.name}
                        color={clothe.color}
                        price={clothe.price}
                        image={clothe.image}
                    />
                ))}
            </ClothesList>
            <Pagination />
        </Container>
    );
}