import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Dispatch, SetStateAction } from "react";

interface CartProps {
    openDrawer: (newOpen: boolean) => () => void;
}


export function Cart({ openDrawer }: CartProps) { 

    return (
        <ContainerCartGlobal>
            <ContainerCart onClick={openDrawer(true)}>
                <ShoppingCartIcon />
                <span>0</span>
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