import styled from "styled-components";
import { Card } from "./Card";
import { Product } from "@/types/Product";

interface MainProps {
    products: Product[] | null;
    setProductsCart: React.Dispatch<React.SetStateAction<Product[] | null>>;
    productsCart: Product[] | null;
}

export function Main({ products, setProductsCart, productsCart }: MainProps) {
    return (
        <ContainerMain>
            <Constainer>
                {products && products.map((product: Product) => (
                    <Card
                        photo={product.photo}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        key={product.id}
                        setProductsCart={setProductsCart}
                        productsCart={productsCart}
                        brand={product.brand}
                        id={product.id}
                    />
                ))}
            </Constainer>
        </ContainerMain>
    );
}

const ContainerMain = styled.main`
    width: 100%;
    height: 100%;
`;

const Constainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

