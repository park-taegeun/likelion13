import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import styled from "styled-components";

export default function App() {
  return (
    <Wrapper>
      <Title>Top 10</Title>
      <ProductList>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
`;

/**
 *    <ProductList>
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ProductList>

     이 코드는 products 배열(더미 데이터 == product.js)을 ProductCard 컴포넌트 배열로 바꾸는 작업
     products.map() - products 배열을 돌면서 
     product => - 도는 객체를 product라고 명명
     
     즉, map을 돌면서 이 product 객체의 값들을 ProductCard 컴포넌트에 props로 전달
 */