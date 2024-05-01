import styled from "styled-components";
import { Card } from "./Card";
import { Product } from "@/types/Product";

interface MainProps {
    products: Product[] | null;
}

export function Main({ products }: MainProps) {
    return (
        <ContainerMain>
            <Constainer>
                {products && products.map((product: Product) => (
                    <Card
                        image={product.photo}
                        name={product.name}
                        descriptiom={product.description}
                        price={product.price}
                        key={product.id} />
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

