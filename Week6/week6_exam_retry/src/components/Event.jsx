import {
    EventDiv,
    Description,
    Title,
} from "./Event.styles";

export default function Event({ image, description, title }) {
    return (
        <EventDiv background={image}>
            <Description>{description}</Description>
            <Title>{title}</Title>
        </EventDiv>
    );
}