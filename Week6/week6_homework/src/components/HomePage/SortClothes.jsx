import {
    Container,
    ButtonDiv,
    Button,
} from "./SortClothes.styles";

export default function SortClothes({ setSortState }) {
    return (
        <Container>
            <ButtonDiv>
                <Button onClick={() => setSortState("none")}>주인장 추천순</Button>
                <Button onClick={() => setSortState("high")}>높은 가격순</Button>
                <Button onClick={() => setSortState("low")}>낮은 가격순</Button>
            </ButtonDiv>
        </Container>
    );
}