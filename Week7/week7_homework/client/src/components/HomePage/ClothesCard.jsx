import axios from "axios";
import {
    Container,
    ClotheImg,
    ClotheNamePriceDiv,
    ClotheNameButton,
    ClothePrice,
    ClotheColor,
    EditButton,
} from "./ClothesCard.styles";

export default function ClothesCard({ name, id,  color, price, image }) {
    const handleClick = (e) => {
        const newName = prompt("변경할 이름을 입력해주세요", name);
        
        if(!newName || !newName.trim())
            return;

        axios
            .patch(`http://localhost:3000/clothes/${id}`, { name: newName })
            .then((res) => {
                alert("이름이 변경되었습니다");
                window.location.reload();
            })
            .catch((err) => {
                alert("이름 변경에 실패하였습니다");
                console.log(err);
            });
    };

    return (
        <Container>
            <ClotheImg src={image} alt={"상품 이미지 준비 중"}/>
            <ClotheNamePriceDiv>
                <ClotheNameButton onClick={handleClick}>{name}</ClotheNameButton>
                <ClothePrice>₩{price.toLocaleString()}</ClothePrice>
            </ClotheNamePriceDiv>
            <ClotheColor>{color}</ClotheColor>
            <EditButton to={`/put/${id}`}>수정</EditButton>
        </Container>
    );
}