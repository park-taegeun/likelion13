import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InputSection from "../components/PostPage/InputSection";
import {

} from "./PutPage.styles";

export default function PutPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
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
    });

    useEffect(() => {
        axios
            .get(`http://localhost:3000/clothes/${id}`)
            .then((res) => {
                setForm(res.data);
            })
            .catch((err) => {
                alert("상품 정보를 불러오는데 실패하였습니다.");
                console.log(err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //PUT 요청
        axios
            .put(`http://localhost:3000/clothes/${id}`, {
                ...form,
                price: Number(form.price),
                rating: Number(form.rating),
                reviews: Number(form.reviews),
            })
            .then((res) => {
                alert("상품이 수정되었습니다.");
                navigate("/");
            })
            .catch((err) => {
                alert("상품 수정에 실패하였습니다.");
                console.log(err);
            });

    };

    return (
        <Container>
        <Title>상품 수정</Title>
        <FormSection onSubmit={handleSubmit}>
            <InputSection form={form} handleChange={handleChange} />
            <AddButton type="submit">수정</AddButton>
        </FormSection>
        </Container>
    );

}