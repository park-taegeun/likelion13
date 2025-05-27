/**
 * lay-out
 * 
 * React에서 layout이란 여러 페이지나 컴포넌트에서 공통적으로 사용하는 UI구조(틀)
 * - 필요성: React는 컴포넌트를 기반으로 개발 -> 반복되는 UI구조를 매번 각 컴포넌트마다 직접 작성은 비효율
 * -> layout 컴포넌트를 만들고 자식요소(children)를 props로 전달받아서 렌더링하는 방식으로 재사용성을 높임
 * 
 * <parent></parent> 사이 내용 === children
 */