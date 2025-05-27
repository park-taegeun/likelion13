function Parent({ children }) {
    return <div className="parent">{children}</div>;
}

export default Parent;

/**
 * parent - 함수형 컴포넌트
 * { children } - props 중에서 children만 구조 분해 할당해서 받아옴
 * 즉, <parent> </parent> 사이 내용이 children이 되어 전달됨
 * 
 * return <div className="parent">{children}</div>;
 * -> 받아온 children을 특정 div(클래스명이 parent) 안에 출력해주는 구조
 */