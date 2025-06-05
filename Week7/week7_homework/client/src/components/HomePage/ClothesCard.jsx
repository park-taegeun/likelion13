import {
    Container,
    ClotheImg,
    ClotheNamePriceDiv,
    ClotheName,
    ClothePrice,
    ClotheColor,
    EditButton,
} from "./ClothesCard.styles";

export default function ClothesCard({ name, id,  color, price, image }) {
    return (
        <Container>
            <ClotheImg src={image} alt={"상품 이미지 준비 중"}/>
            <ClotheNamePriceDiv>
                <ClotheName>{name}</ClotheName>
                <ClothePrice>₩{price.toLocaleString()}</ClothePrice>
            </ClotheNamePriceDiv>
            <ClotheColor>{color}</ClotheColor>
            <EditButton to={`/put/${id}`}>수정</EditButton>
        </Container>
    );
}