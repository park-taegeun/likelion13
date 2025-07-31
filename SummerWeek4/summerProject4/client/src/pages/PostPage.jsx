import InputSection from "../components/PostPage/InputSection";
import { useState } from "react";
import { Container, Title, FormSection, AddButton } from "./PostPage.styles";
import { APIService } from "../lib/api";

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
  };
  const [form, setForm] = useState(INITIAL_FORM);
  const [, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  /**
   * const { name, value, type, checked } = e.target;
   * - e.target은 이벤트가 발생한 HTML 요소 자체
   * - 거기서 자주 쓰는 속성을 구조 분해 할당으로 꺼내는 것
   * - name: input란에서 지정된 name 속성 -> form 객체의 key가 된다.
   * - value: 사용자가 입력한 값
   * - type: input type이 뭐냐 -> text, checkbox, number 등...
   * - checked: 체크 여부
   *
   * setForm({ ...form, [name]: type === "checkbox" ? checked : value })
   * - ...form: 기존에 있던 모든 상태를 복사 (기존 값 유지)
   * - [name]: 바뀐 input의 name 값이 키(key)가 됨
   * - value 또는 checked를 넣어줌
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    submitPostForm();
  };

  const submitPostForm = async () => {
    setIsLoading(true);

    try {
      await APIService.public.post("/clothes", {
        ...form,
        price: Number(form.price),
        rating: Number(form.rating),
        reviews: Number(form.reviews),
      });

      alert("상품이 등록되었습니다.");
      setForm(INITIAL_FORM);
    } catch (err) {
      alert("상품 등록에 실패하였습니다.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
