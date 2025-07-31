import Pagination from "../components/HomePage/Pagination";
import ClothesCard from "../components/HomePage/ClothesCard";
import SortAndQna from "../components/HomePage/SortAndQna";
import { useState, useEffect } from "react";
import { APIService } from "../lib/api";
import { Container, ClothesList } from "./HomePage.styles";

export default function HomePage() {
  const [sortState, setSortState] = useState("none");
  const [clothesList, setClohtesList] = useState([]);
  // clothesList: 서버에서 받아온 상품 목록을 저장하는 state 변수 (상품 데이터를 보관하는 변수)
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    fetchClothes();
  }, []);

  const fetchClothes = async () => {
    setIsLoading(true);

    try {
      const data = await APIService.public.get("/clohtes");
      setClohtesList(data);
    } catch (err) {
      alert("상품 정보를 가져오는데 실패하였습니다.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  let SortedList;

  if (sortState === "low") {
    SortedList = [...clothesList].sort((a, b) => a.price - b.price);
  } else if (sortState === "high") {
    SortedList = [...clothesList].sort((a, b) => b.price - a.price);
  } else {
    SortedList = clothesList;
  }

  return (
    <Container>
      <SortAndQna setSortState={setSortState} />
      <ClothesList>
        {SortedList.map((clothe) => (
          <ClothesCard
            key={clothe.id}
            id={clothe.id}
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
