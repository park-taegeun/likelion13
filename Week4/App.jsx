// import "./App.css";
// import Parent from "./Parent";

// function App() {
//   return <Parent children={<div className="child"></div>} />;
// }
// /**
//  * App 컴포넌트는 Parent라는 컴포넌트를 화면에 렌더링
//  * 이때, Parent에게 전달되는 props 중에 이름이 children인 prop이 존재
//  * 이 children prop의 값은 <div className="child"></div>라는 JSX 요소
//  * 즉, Parent 컴포넌트는 props로 { children: <div className="child"></div> } 를 받게 된다.
//  */

// export default App;

import "./App.css";
import Parent from "./Parent";
// Parent.jsx 파일에서 Parent 컴포넌트를 불러오는 코드

function App() {
  return (
    <Parent>
      <div className="child"></div>
      {/* child 요소를 여러개 복붙해보세요 */}
    </Parent>
  );
}

export default App;

/**
 * 함수형 컴포넌트 App
 * return() - 실제로 브라우저에 그려질 화면 구조 정의
 * =========================================================
 * <Parent>
 *     <div className="child"></div>
 * </Parent>
 * -> Parent: import한 컴포넌트 / <div className="child"></div>: Parent.jsx에게 children이라는 이름으로 전달되는 내용
 * ==========================================================
 * 
 * Parent.jsx 안에서는 이렇게 처리
 * <div className="parent">
 *  <div className="child"></div>
 * </div>
 * -> 따라서 브라우저에는 큰 박스(parent) 안에 작은 박스(children)가 들어있는 것처럼 보인다.
 */