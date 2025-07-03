import {
  Container,
  FormRow,
  Label,
  Input,
  Select,
  Checkbox
} from "./InputSection.styles";

export default function InputSection({ form, handleChange }) {
  return (
    <Container>
      <FormRow>
        <Label>상품명</Label>
        <Input name="name" value={form.name} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>가격</Label>
        <Input name="price" type="number" value={form.price} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>이미지 주소</Label>
        <Input name="image" value={form.image} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>색상</Label>
        <Input name="color" value={form.color} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>사이즈</Label>
        <Input name="size" value={form.size} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>성별</Label>
        <Select name="gender" value={form.gender} onChange={handleChange}>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="unisex">공용</option>
        </Select>
      </FormRow>

      <FormRow>
        <Label>품절 여부</Label>
        <Checkbox name="soldout" type="checkbox" checked={form.soldout} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>상품 타입</Label>
        <Input name="type" value={form.type} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>평점</Label>
        <Input name="rating" type="number" step="0.1" value={form.rating} onChange={handleChange} />
      </FormRow>

      <FormRow>
        <Label>리뷰 수</Label>
        <Input name="reviews" type="number" value={form.reviews} onChange={handleChange} />
      </FormRow>
    </Container>
  );
}
