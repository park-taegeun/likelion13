import Pagination from "../components/HomePage/Pagination";
import ClothesCard from "../components/HomePage/ClothesCard";
import SortAndQna from "../components/HomePage/SortAndQna";
import { useState } from "react";
import { clothes } from "../data/clothes";
import {
    Container,
    ClothesList,
} from "./HomePage.styles";

export default function HomePage() {
    const [sortState, setSortState] = useState("none");
    let SortedList;

    if (sortState === "low") {
        SortedList = [...clothes].sort((a, b) => a.price - b.price);
    }
    else if (sortState === "high") {
        SortedList = [...clothes].sort((a, b) => b.price - a.price);
    }
    else {
        SortedList = clothes;
    }

    return (
        <Container>
            <SortAndQna setSortState={setSortState} />
            <ClothesList>
                {SortedList.map(clothe => (
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
