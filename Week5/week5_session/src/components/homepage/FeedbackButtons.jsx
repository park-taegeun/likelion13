import React from 'react';
import { Container, Button } from './FeedbackButton.styles';

export default function FeedbackButtons() {
    return(
        <Container>
            <Button>텍스트 후기 작성</Button>
            <Button>이미지 후기 작성</Button>
            <Button>소감문 제출(PDF)</Button>
        </Container>
    );
}