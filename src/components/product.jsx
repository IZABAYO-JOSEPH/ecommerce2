import styled from "styled-components";

import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Product = ({ item }) => {
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
    cursor: pointer;
  `;
  const Container = styled.div`
    flex: 1;
    position: relative;
    margin: 5px;
    min-width: 420px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    &:hover ${Info} {
      opacity: 1;
    }
  `;
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
  `;
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;

  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 1s ease;
    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
       
        
        ]}
  `;

  return (
    <Container>
      <Circle />
      <Image src={item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
export default Product;
