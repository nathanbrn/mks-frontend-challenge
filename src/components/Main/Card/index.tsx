import styled from "styled-components";
import Image from 'next/image';
import Bag from '@/assets/Bag.svg'
import { Product } from "@/types/Product";
import { toast } from "react-toastify";

interface CardProps extends Product {
    setProductsCart: React.Dispatch<React.SetStateAction<Product[] | null>>;
    productsCart: Product[] | null;
}

export function Card({photo, name, price, description, setProductsCart, productsCart, id, brand}: CardProps) {
    function addProductCart() {
        const newProduct: Product = {
            photo,
            name,
            price, 
            description,
            id,
            brand
        };

        
        if (productsCart) {
            const productExistsInCart: boolean = productsCart.find((product) => product.id === newProduct.id) ? true : false;

            if (productExistsInCart) {
                toast.error('Já existe este item no carrinho!');
            } else {
                setProductsCart([...productsCart, newProduct]);
            }
        } else {
            setProductsCart([newProduct]);
        }

    }
    
    return (
        <CardContainer>
            <CardHeader>
                <Image src={photo} width={110} height={130} alt={name} />
            </CardHeader>
            <CardBody>
                <ContainerBodyNamePrice>
                    <NameProduct>{name}</NameProduct>
                    <PriceContainer>
                        <span>R${Number(price).toLocaleString('BR')}</span>
                    </PriceContainer>
                </ContainerBodyNamePrice>
                <Description>{description}</Description>
            </CardBody>
            <Button onClick={addProductCart}>
                <Image src={Bag} alt="Bag" />
                <span>COMPRAR</span>
            </Button>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    min-height: 300px !important;
    width: 250px;
    border-radius: 12px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 8px;
`;

const CardHeader = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
`;

const CardBody = styled.div`
    margin: 0 14px;
`;

const Description = styled.span`
    font-size: 10px;
    font-weight: 300;
    margin: 8px 0;
    
`;

const ContainerBodyNamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin: 8px 0;
`;

const NameProduct = styled.span`
    font-size: 16px;
    font-weight: 400;
`;

const PriceContainer = styled.div`
    background-color: #373737;
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 4px 8px;

    span {
        font-size: 15px;
        font-weight: bold;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 8px 0;
    border-radius: 0 0 8px 8px;
    border: none;
    background-color: #0F52BA;
    color: #FFF;
    font-weight: bold;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    transition: all .4s ease-in-out;

    &:hover {
        background-color: #111;
    }
`;