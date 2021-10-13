import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./categoryItem";
const Container = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
