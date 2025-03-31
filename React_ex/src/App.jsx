import "./App.css";
export default function App() {
  return(
    <div>
        <header>
            <h1>About me</h1>
            <p>페이지를 내려가며 저에 대해 더 알아보세요!</p>
        </header>
        <nav className="nav">
            <h3>[알아가는 순서]</h3>
            <ul>
                <li><a href="#name">이름 & 간단한 소개</a></li> 
                <li><a href="#about">자기소개 본문</a></li>
                <li><a href="#feature">취미 & 관심사</a></li>
                <li><a href="#movie">좋아하는 영화/드라마</a></li>
                <li><a href="#sns">SNS & 연락처</a></li>
            </ul>
        </nav>
        <main>
            <section id="name"> 
                <div className="name">
                    <h4>안녕하세요!</h4>
                    <p>저는 서경대학교 전자컴퓨터공학과 21학번 <strong>박태근</strong>입니다.</p>
                    <p>한 기수동안 잘 부탁드리고 재밌게 활동하면 좋겠습니다.</p>
                </div>
            </section>
            <p></p>
            <section id="about">
                <div className="aboutme">
                    <h4>[나에 대해 더 자세히]</h4>
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
                <div className="box">
                    <h4>[취미 그리고 관심사]</h4>
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
                <div className="favorite">
                    <h4>[좋아하는 영화/드라마 순위]</h4>
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
                   <h4>[연락처]</h4>
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

/*import "./App.css";

export default function App() { //React 컴포넌트를 내보내는 코드 -> 이 컴포넌트를 다른 곳에서 사용할 수 있게 하기 위해서
  // 리액트 컴포넌트란 재사용 가능한 UI 조각 == 화면을 구성하는 독립적인 블록
  return (
    <div>
      <header className="header">
        <h1>My Profile</h1>
        <p>나만의 웹사이트를 만들어봐요!</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#about">자기소개</a></li>
          <li><a href="#features">관심사</a></li>
          <li><a href="#contact">연락하기</a></li>
          <li><a href="https://skulikelion.com" target="_blank" >멋사 사이트 바로가기</a></li>
        </ul>
      </nav>

      <main className="main">
        <section id="about" className="section">
          <h2>안녕하세요!</h2>
          <p>만나서 반갑습니다. 저는 컴퓨터공학과에 재학중인 22학번 홍길동입니다.</p>
          <p>함께 즐거운 동아리 생활 보내봐요 ^^</p>
          <img
            className="img"
            src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eViY/image/is3UFbmo7Gwuiln43EznmVZFwXo.jpg"
            alt="about_image"
          />
        </section>

        <section id="features" className="section">
          <h2>관심사</h2>
          
          <h3>취미</h3>
          <ul>
            <li>농구 보기</li>
            <li>음악 감상</li>
            <li>기타 치기</li>
            <li>코딩 ^^</li>
          </ul>
          <img
            className="img"
            src="https://i.ytimg.com/vi/dIt_N7yNTgk/mqdefault.jpg"
            alt="guitar_image"
          />

          <h3>좋아하는 음식 순위</h3>
          <ol>
            <li>타코</li>
            <li>떡볶이</li>
            <li>햄버거</li>
          </ol>
          <img
            className="img"
            src="https://i.pinimg.com/474x/7a/9e/ec/7a9eec73158b3e0a84691551180fef8e.jpg"
            alt="hamburger_image"
          />
        </section>

        <section id="contact" className="section">
          <h2>연락하기</h2>
          <p>이메일: skulikelion@example.com</p>
          <p>전화번호: 010-1234-5678</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025. SKU LIKELION. All rights reserved.</p>
      </footer>
    </div>
  );
}*/
/**
 * React는 자바스크립트로 만든 라이브러리
 * react는 화면을 동적으로 바꾸기 쉽게 도와준다.
 * state를 이용해서 데이터에 따라 자동으로 화면을 업데이트해준다.
 * DOM - Document object model: 가벼운 복사본을 메모리에 저장한 것
 * 가상DOM은 메모리 속 DOM을 의미 / 실제DOM은 브라우저가 실제로 화면에 보여주는 HTML요소 구조이다.
 * react에서 state는 상태를 의미 -> 상태는 컴포넌트 안에서 바뀔 수 있는 값이고 이 값이 바뀌면 UI도 따라서 바뀐다.
 * 즉, 각각의 컴포넌트는 독립적으로 상태를 가진다.
 * 부모 컴포넌트는 다른 컴포넌트를 포함하는 컴포넌트이고 자식 컴포넌트는 포함되는 컴포넌트
 * 자식 컴포넌트는 부모 컴포넌트로부터 데이터를 받을 수 있음 -> 이 때 사용하는 방법이 props(properties의 줄임말)
 */