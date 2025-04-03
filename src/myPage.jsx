import "./App.css";
import entranceImg from './assets/Entrance.png';
import seaImg from './assets/1743042503795.jpg';

export default function App() {
  return(
    <div>
        <header className="header">
          <h1>About me</h1>
          <p>페이지를 내려가며 저에 대해 더 알아보세요!</p>
        </header>
        <nav className="nav">
            <h3>[Sequence]</h3>
            <ul>
              <li><a href="#name" className="href_name">name & simple instruction</a></li> 
              <li><a href="#about" className="href_about">my profile</a></li>
              <li><a href="#feature" className="href_feature">hobby & interest</a></li>
              <li><a href="#movie" className="href_movie">favorite series</a></li>
              <li><a href="#sns" className="href_sns">SNS</a></li>
            </ul>
        </nav>
        <main>
          <div className="img_container">
            <img src={entranceImg} className="img_ent" />
            <img src={seaImg} className="img_sea" />
          </div>
          <hr></hr>
            <section id="name"> 
                <div className="name">
                    <h4>Instruction</h4>
                    <p>저는 서경대학교 전자컴퓨터공학과 21학번 <strong>박태근</strong>입니다.</p>
                    <p>한 기수동안 잘 부탁드리고 재밌게 활동하면 좋겠습니다✌️</p>
                </div>
            </section>
            <p></p>
            <section id="about">
                <div className="about">
                    <h4>Profile</h4>
                    <p>제 본가는 경기도 광명이고 현재 통학 중입니다, 다행히 이번 학기는 공강이 2일이라 작년에 비해 덜 힘든 것 같습니다.</p>
                    <p>동아리를 활동하며 얻어가고 싶은 부분은 프로젝트를 경험하면서 팀원들과 협업하는 능력과 실무 경험입니다.</p>
                    <p>개발이나 프로젝트에 부족한 점이 많지만 제가 선택한 만큼 최선을 다해 활동하겠습니다.</p>
                    <p>이번 한 해가 누구에게나 재밌고 유익한 시간이 되면 좋겠습니다.</p>
                    <p>저는 한식을 제일 좋아하고 요즘은 특히 두루치기에 환장해요 ㅋㅋ</p>
                    <p>!강아지를 키우는데 보고 싶으신 분은 <strong><a href="https://www.instagram.com/p/C7DcklIS14Sa4ZR3F0t42r0EZH3AI17yi_LpDo0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" class="choco-link" target="_blank">**초코</a></strong> 눌러주세요! 상당히 귀엽습니다.</p>
                </div>
            </section>
            <p></p>
            <section id="feature">
                <div className="feature">
                    <h4>Interest</h4>
                    <p>제 취미는 <strong>운동 & 영화</strong>입니다.</p>
                    <p>운동은 어릴 때 유독 말랐었는데 체형을 바꾸고 싶어 시작한 운동에 재미가 붙어 꾸준히 해오고 있습니다.</p>
                    <p>영화를 좋아하는 이유는 영화를 볼 때는 그 장면들에만 집중해 아무런 잡생각이 들지 않기 때문에 좋아합니다.</p>
                    <p>그래서 고민이 많거나 여러가지 스트레스를 받을 때 영화를 보며 생각을 비워내곤 합니다. </p>
                    <p>현재 저의 가장 큰 관심사는 <strong>옷</strong>입니다.</p>
                    <p>쉬는 날이나 시간이 될 때 옷을 보러 다니는 걸 즐기고 유튜브나 인스타 등 sns에서도 주 관심사는 패션입니다.</p>
                    <p>그러다 보니 자연스레 관련 직에서 근무해보고 싶다는 생각이 들었고 좋은 기회가 있어 <a href="https://www.instagram.com/entrance_thehyundai/?hl=ko" target="_blank">더현대서울</a>에서 근무 중입니다.</p>
                </div>
            </section>
            <p></p>
            <section id="movie">
                <div className="movie">
                    <h4>Movie & Series</h4>
                    <ol>
                        <li><strong>낭만닥터 김사부 시리즈</strong></li>
                        <p>3편까지 나왔는데 모든 시리즈를 재밌게 봤고 중간중간 나오는 인물들의 대사들이 우리에게 위로와 격려를 보낸다.</p>
                        <p>**좋아하는 대사** : 어느 쪽이 더 가치있는 인생인가, 여기에 대해서 나에게 묻는 거라면 나는 판단할 수 없는 문제라고 생각해.</p>
                        <p>인생이라는 거, 그건 남과의 비교가 아니라 내 선택의 문제거든.</p>
                        <p>분명한 건 너 어디서든 잘해 낼 거라는 거야. 어떤 길, 어떤 선택을 하든 너 자신을 의심하지마.</p>
                        <li><strong>사랑의 온도</strong></li>
                        <li><strong>퍼스트러브하츠코이</strong></li>
                    </ol>
                </div>
            </section>
            <p></p>
            <section id="sns">
                <div className = "sns">
                   <h4>SNS</h4>
                   <p>이메일 : taegeun1234@naver.com</p>
                   <p>전화번호 : 010 9930 3186</p>
                   <p>인스타그램 : <a href="https://www.instagram.com/_xorms/?hl=ko" target="_blank">_xorms</a></p> 
                </div>
            </section>
        </main>
        <footer>
            <p>2025. SKU LIKELION. All Rights Reserved.</p>
        </footer>
        </div>
  );
}

/**
 * html -> jsx 변환법
 * 1. <!DOCTYPE html>, <html>, <head>, <body> 삭제
 * 2. <img> 태그 / 이용해서 닫아주기
 * 3. class -> className 변경
 * 4. 최상단에 <div>추가
 * 5. <title> 태그 삭제
 * 6. <header>위에
 *  import "./myPage.css";
    export default function App() {
        return(
 *  이거 붙여주기.
 */

/**
 * src/
├── App.jsx          ← 당신의 JSX 코드
├── App.css          ← App 컴포넌트에만 적용되는 스타일
├── index.css        ← 모든 컴포넌트에 영향을 줄 수 있는 전역 스타일
└── main.jsx         ← 프로젝트 시작점 (React 렌더링 코드)

 */