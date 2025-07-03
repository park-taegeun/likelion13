import Pagination from "../components/HomePage/Pagination";
import ClothesCard from "../components/HomePage/ClothesCard";
import SortAndQna from "../components/HomePage/SortAndQna";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Container,
    ClothesList,
} from "./HomePage.styles";

export default function HomePage() {
    const [sortState, setSortState] = useState("none");
    const [isLoading, setIsLoading] = useState(false);
    const [clothesList, setClothesList] = useState([]);
    let SortedList;

    useEffect(() => {
        fetchClothes();
    }, []);

    const fetchClothes = () => {
        setIsLoading(true);

        axios
            .get("http://localhost:3000/clothes")
            .then((res) => {
                setClothesList(res.data);
            })
            .catch((err) => {
                alert("에러가 발생했습니다.");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    if (sortState === "low") {
        SortedList = [...clothesList].sort((a, b) => a.price - b.price);
    }
    else if (sortState === "high") {
        SortedList = [...clothesList].sort((a, b) => b.price - a.price);
    }
    else {
        SortedList = clothesList;
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
