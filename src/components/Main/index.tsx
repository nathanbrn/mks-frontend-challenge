import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";

interface Product {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
}

export function Main() {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        (async () => {
            await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC').then((product) => {
                setProducts(product.data.products);
            }).catch((error) => {
                console.log(error.message);
            })
        })();
    }, []);

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

