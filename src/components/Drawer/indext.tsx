import { Drawer } from "@mui/material";
import styled from "styled-components";
import { Product } from "@/types/Product";
import { ProductCart } from "./ProductCart";

interface DrawerProps {
  open: boolean;
  closeDrawer: () => void;
  productsCart: Product[] | null;
}

export function DrawerComponent({ open, closeDrawer, productsCart }: DrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={closeDrawer}>
      <Box role="presentation">
        <ContainerHeaderBoxDrawer>
          <h2>Carrinho de compras</h2>
          <button onClick={closeDrawer}>
            <span>X</span>
          </button>
        </ContainerHeaderBoxDrawer>
        {productsCart?.map((product: Product) => (
          <ProductCart 
            name={product.name}
            key={product.id}
            photo={product.photo}
            price={product.price}
            id={product.id}
            brand={product.brand}
            description={product.description}
          />
        ))}
      </Box>
    </Drawer>
  );
}

const ContainerHeaderBoxDrawer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 50px;

  h2 {
    font-size: 27px;
    font-weight: bold;
    max-width: 200px;
    cursor: default;
  }

  button {
    border: none;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    cursor: pointer;
    background-color: #111;
    color: #FFF;
    font-size: 20px;
    transition: all .4s ease-in-out;
    position: absolute;
    top: 12px;
    right: 0;

    &:hover {
      background-color: #FFF;
      color: #111;
    }
  }
`;

const Box = styled.div`
  width: 550px; 
  height: 100%; 
  padding: 0 32px; 
  background-color: #0F52BA;
  color: #FFF;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    padding: 0 8px;
    width: 300px;
  }
`;
