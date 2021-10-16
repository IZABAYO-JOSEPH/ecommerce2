import styled from "styled-components";

import { popularProducts } from "../data";
import Product from "./product";

const Products = () => {
  const Container = styled.div`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
