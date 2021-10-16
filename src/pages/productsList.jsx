import NavBar from "../components/navbar";
import styled from "styled-components";
import Anouncement from "./../components/anouncements";
import Products from "../components/products";
import NewsLetter from "../components/newsletter";
import Footer from "../components/footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 17px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Anouncement />
      <Title>NIKE</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Purple</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              {" "}
              Size
            </Option>
            <Option>40-41</Option>
            <Option>41</Option>
            <Option>41-42</Option>
            <Option>42</Option>
            <Option>40</Option>
            <Option>38</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <option selected>newest</option>
            <option>Price(asc)</option>
            <option>Price(desc)</option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};
export default ProductList;
