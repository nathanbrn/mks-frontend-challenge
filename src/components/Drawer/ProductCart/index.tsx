import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/Product";

interface ProductCartProps extends Product { }

export function ProductCart({ name, photo, price }: ProductCartProps) {
  const [count, setCount] = useState<number>(1);

  function addNumber() {
    setCount(count + 1);
  }

  function rmvNumber() {
    setCount(count === 0 ? count : count - 1);
  }

  if (!(count === 0)) {
    return (
      <ContainerMainBoxDrawer>
        <ContainerProduct>
          <Image src={photo} width={46} height={57} alt="Relogio" />
          <NameProduct>{name}</NameProduct>
          <div>
            <TextQuantity>Qtd:</TextQuantity>
            <ContainerSumQuantity>
              <button onClick={rmvNumber}>-</button>
              <div><span>{count}</span></div>
              <button onClick={addNumber}>+</button>
            </ContainerSumQuantity>
          </div>
          <Price>R${(Number(price) * count).toLocaleString("BR")}</Price>
        </ContainerProduct>
      </ContainerMainBoxDrawer>
    );
  }
}

const ContainerMainBoxDrawer = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

const ContainerProduct = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFF;
  border: none;
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