import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
    }
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetchClotheInfo();
    }, []);

    const fetchClotheInfo = () => {
        setIsLoading(true);

        axios
            .get(`http://localhost:3000/clothes/${id}`)
            .then((res) => {
                setForm(res.data);
            })
            .catch((err) => {
                alert("에러가 발생하였습니다.");
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        submitPutForm();
    }

    const submitPutForm = () => {
        setIsLoading(true);

        axios
            .put(`http://localhost:3000/clothes/${id}`, {
                ...form,
                price: Number(form.price),
                rating: Number(form.rating),
                reviews: Number(form.reviews),
            })
            .then((res) => {
                alert("상품 수정이 완료되었습니다.");
                navigate("/");
            })
            .catch((err) => { 
                alerth("에러가 발생하였습니다.");
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

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