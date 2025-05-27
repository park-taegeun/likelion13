import img_1 from "../assets/images/img_1.png";
import img_2 from "../assets/images/img_2.png";
import img_3 from "../assets/images/img_3.png";
import Event from "./Event";
import styled from "styled-components";

export default function EventSection() {
    return (
        <EventDiv>
            <Event image={img_1} description={"이젠 추억이죠?"} title={"단체 OT"}/>
            <Event image={img_2} description={"상상을 현실로"} title={"아이디어톤"} />
            <Event image={img_3} description={"우리들의 이야기"} title={"멋사 MT"} />
        </EventDiv>
    );
}

const EventDiv = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    gap: 30px;
`;