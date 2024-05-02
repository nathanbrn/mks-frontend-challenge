import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Product } from "@/types/Product";

interface CartProps {
    openDrawer: () => void;
    ProductsInCart: Product[] | null;
}

export function Cart({ openDrawer, ProductsInCart }: CartProps) {

    return (
        <ContainerCartGlobal>
            <ContainerCart onClick={openDrawer}>
                <ShoppingCartIcon />
                <span>{ProductsInCart ? ProductsInCart.length : 0}</span>
            </ContainerCart>
        </ContainerCartGlobal>
    );
}

const ContainerCart = styled.button`
    width: 70px;
    height: 45px;
    background-color: #FFF;
    border: none;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #111;
    cursor: pointer;
    transition: all .4s ease-in-out;

    span {
        font-weight: bold;
    }

    &:hover {
        color: #FFF;
        background-color: #111;
    }
`;

const ContainerCartGlobal = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
`;