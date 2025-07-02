import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import InputSection from "../components/PostPage/InputSection";
import {
    Container,
    Title,
    FormSection,
    EditButton,
} from "./PutPage.styles";

export default function PutPage() {
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
    };
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState(INITIAL_FORM);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchClotheInfo();
    }, [id]);

    const fetchClotheInfo = () => {
        setIsLoading(true);

        axios
            .get(`http://localhost:3000/clothes/${id}`)
            .then((res) => {
                setForm(res.data);
            })
            .catch((err) => {
                alert("상품 정보를 불러오는데 실패하였습니다");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        submitPutForm();
    };

    const submitPutForm = () => {
        setIsLoading(true);

        axios
            .put(`http://localhost/3000/clothes/${id}`, {
                ...form,
                price: Number(form.price),
                rating: Number(form.rating),
                reviews: Number(form.reviews),
            })
            .then(() => {
                alert("상품이 수정되었습니다");
                navigate("/");
            })
            .catch((err) => {
                alert("상품 수정에 실패하였습니다");
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <Container>
        <Title>상품 수정</Title>
        <FormSection onSubmit={handleSubmit}>
            <InputSection form={form} handleChange={handleChange} />
            <EditButton type="submit">수정</EditButton>
        </FormSection>
        </Container>
    );

}