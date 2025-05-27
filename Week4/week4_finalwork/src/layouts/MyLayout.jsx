import { Outlet } from "react-router";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function MyLayout() {
    const location = useLocation();
    const hideTitle = location.pathname === "/account/edit";

    return(
        <Div>
            {!hideTitle && <Title>My Account Page</Title>}
            <Content>
                <Outlet />
            </Content>
        </Div>
    );
}

export default MyLayout;

/**
 * <Div> - 전체 제어
 * <Title> - 페이지 제목 표시
 * <Content> - 본문
 * <Outlet>
 * - 현재 URL 경로에 맞는 자식 컴포넌트를 끼워 넣는다
 * - MyLayout은 틀 역할이고 그 안에서 경로가 /account면 Account.jsx가 렌더링, /account/edit이면 EditAccount.jsx가 렌더링
 * - <Outlet /> = 현재 경로에 해당하는 컴포넌트를 "MyLayout 내부에 끼워주는 자리"
 * 
 * -> MyLayout은 RootLayout 내부에 들어오는 거라 즉, 루트 레이아웃의 outlet 자리에 들어온다고 생각하면 된다.
 */

const Div = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
`;

const Title = styled.h2`
margin-left: 170px;
`;

const Content = styled.div`
padding: 10px;
`;