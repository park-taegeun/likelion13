import Header from "../components/Header/Header";
import greenPoint from "../assets/images/greenPoint.png";
import ideathon2 from "../assets/images/ideathon2.jpg";
import {
    MainContainer,
    TitleWrapper,
    PointImg,
    Title,
    SubTitle,
    DiaryButton,
    DiaryWrapper,
    TopMemo,
    BottomMemo,
    MemoDiv1,
    MemoDiv2,
    MemoDiv3,
    MemoImg,
} from "./DiaryPage.styles";

export default function DiaryPage() {
    return (
        <>
        <Header />
        <MainContainer>
            <TitleWrapper>
                <PointImg src={greenPoint} alt='포인트 이미지'/>
                <Title>Diary</Title>
            </TitleWrapper>
            <SubTitle>
            2025 서경대학교 아이디어톤의 소감을 적는 곳입니다.
            여러분이 느꼈던 모든 것을 적어주세요! <br />
            이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요!
            방명록이라고 생각하고 편하게 사용 부탁함~
            </SubTitle>
            <DiaryButton>방명록 쓰러가기</DiaryButton>
            <DiaryWrapper>
                <TopMemo>
                    <MemoDiv1>다들<br />사랑해요<br />!!!!!!!</MemoDiv1>
                    <MemoDiv2>최강 동아리 멋쟁이사자처럼<br />그 중 서경대가 최강</MemoDiv2>
                </TopMemo>
                <BottomMemo>
                    <MemoDiv3>내가 더더더!!</MemoDiv3>
                    <MemoImg src={ideathon2} alt='아이디어톤 이미지2'/>
                </BottomMemo>
            </DiaryWrapper>
        </MainContainer>
        </>
    );
}