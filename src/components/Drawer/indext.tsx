import { Drawer } from "@mui/material";
import styled from "styled-components";
import { Product } from "@/types/Product";
import { ProductCart } from "./ProductCart";
import { motion } from "framer-motion";
import { useState } from "react";

interface DrawerProps {
  open: boolean;
  closeDrawer: () => void;
  productsCart: Product[] | null;
  setProductsCart: React.Dispatch<React.SetStateAction<Product[] | null>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  showAlert: () => void;
}

export function DrawerComponent({ open, closeDrawer, productsCart, setProductsCart, total, setTotal, showAlert }: DrawerProps) {

  return (
    <Drawer anchor="right" open={open} onClose={closeDrawer}>
      <Box role="presentation">
        <div>
          <ContainerHeaderBoxDrawer>
            <h2>Carrinho de compras</h2>
            <button onClick={closeDrawer}>
              <span>X</span>
            </button>
          </ContainerHeaderBoxDrawer>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              overflowY: 'scroll',
              height: 400,
              padding: 10
            }}
            className="custom-scrollbar"
          >
            {productsCart?.map((product: Product) => (
              <ProductCart
                name={product.name}
                key={product.id}
                photo={product.photo}
                price={product.price}
                id={product.id}
                brand={product.brand}
                description={product.description}
                setProductsCart={setProductsCart}
                productsCart={productsCart}
                setTotal={setTotal}
                total={total}
              />
            ))}
          </motion.div>
        </div>
      </Box>
      <FooterDrawer>
        <div>
          <span>Total:</span>
          <span>R${Number(total).toLocaleString('BR')}</span>
        </div>
        <button onClick={showAlert}>Finalizar Compra</button>
      </FooterDrawer>
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
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    padding: 0 8px;
    width: 300px;
  }
`;

const FooterDrawer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0F52BA;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: space-between;
    margin: 0 24px;
  }

  button {
    height: 50px;
    background-color: #111;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: all .4s ease-in-out;
    border: none;

    &:hover {
      background-color: #FFF;
      color: #111;
    }
  }
`;