import InputSection from "../components/PostPage/InputSection";
import { useState } from "react";
import axios from "axios";
import {
    Container,
    Title,
    FormSection,
    AddButton
} from "./PostPage.styles";

export default function PostPage() {
    const INITIAL_FORM = {
        name: "",
        price: "",
        image: "",
        color: "",
        size: "",
        gender: "unisex",
        soldout: false,
        type: "",
        rating: 0,
        reviews: 0,
    }
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState(INITIAL_FORM);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefalut();

        submitPostForm();
    }

    const submitPostForm = () => {
        setIsLoading(true);

        axios
            .post("http://localhost:3000/clothes", {
                ...form,
                price: Number(form.price),
                rating: Number(form.rating),
                reviews: Number(form.reviews),
            })
            .then((res) => {  
                alert("상품이 등록되었습니다!");
                setForm(INITIAL_FORM);
            })
            .catch((err) => {
                alert("에러가 발생하였습니다.");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <Container>
            <Title>상품 등록</Title>
            <FormSection onSubmit={handleSubmit}>
                <InputSection form={form} handleChange={handleChange} />
                <AddButton type="submit">등록</AddButton>
            </FormSection>
        </Container>
    );
}