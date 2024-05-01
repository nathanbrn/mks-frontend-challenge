import { Drawer } from "@mui/material";
import { count } from "console";
import styled from "styled-components";
import Image from "next/image";

interface DrawerProps {
    open: boolean;
    closeDrawer: () => void;
    count: number;
    addNumber: () => void;
    rmvNumber: () => void;
}

export function DrawerComponent({ open, closeDrawer, count, addNumber, rmvNumber }: DrawerProps) {
    return (
        <Drawer anchor="right" open={open} onClose={closeDrawer}>
            <Box role="presentation">
                <ContainerHeaderBoxDrawer>
                    <h2>Carrinho de compras</h2>
                    <button onClick={closeDrawer}>
                        <span>X</span>
                    </button>
                </ContainerHeaderBoxDrawer>
                <ContainerMainBoxDrawer>
                    <ContainerProduct>
                        <Image src='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp' width={46} height={57} alt="Relogio" />
                        <NameProduct>Apple Watch Series 4 GPS</NameProduct>
                        <div>
                            <TextQuantity>Qtd:</TextQuantity>
                            <ContainerSumQuantity>
                                <button onClick={rmvNumber}>-</button>
                                <div><span>{count}</span></div>
                                <button onClick={addNumber}>+</button>
                            </ContainerSumQuantity>
                        </div>
                        <Price>R$399</Price>
                    </ContainerProduct>
                </ContainerMainBoxDrawer>
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

  @media screen and (max-width: 500px) {
    padding: 0 8px;
    width: 300px;
  }
`;

const ContainerMainBoxDrawer = styled.div`
  height: 100%;
  width: 100%;
`;

const ContainerProduct = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFF;
  border-radius: 12px;
  color: #111;


`;

const NameProduct = styled.span`
  font-size: 13px;
  font-weight: 400;
  max-width: 110px;
`;

const TextQuantity = styled.span`
  font-size: 8px;
`;

const ContainerSumQuantity = styled.div`
  display: flex;
  border: 1px solid rgba(1, 1, 1, 0.1);

  span {
    font-size: 12px;
    font-weight: 400;
    margin: 0 4px;
  }

  button {
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
  }
`;

const Price = styled.span`
  font-weight: 700;
`;