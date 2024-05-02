import styled from "styled-components";
import { Card } from "./Card";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

interface MainProps {
    products: Product[] | null;
    setProductsCart: React.Dispatch<React.SetStateAction<Product[] | null>>;
    productsCart: Product[] | null;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export function Main({ products, setProductsCart, productsCart, total, setTotal }: MainProps) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (products) {
            setLoading(false);
        }
    }, [products]);

    return (
        <ContainerMain>
            <Constainer>
                {loading && (
                    <div style={{
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap'
                    }}>
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                        <Skeleton variant="rectangular" animation='wave' width={250} height={300} />
                    </div>
                )}
                {!loading && products?.map((product: Product) => (
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
                        total={total}
                        setTotal={setTotal}
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

