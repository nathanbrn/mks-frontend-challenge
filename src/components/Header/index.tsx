import styled from "styled-components";
import { Logo } from "./Logo";
import { Cart } from "./Cart";
import { Product } from "@/types/Product";

interface HeaderProps {
    openDrawer: () => void;
    ProductsInCart: Product[] | null;
}

export function Header({ openDrawer, ProductsInCart }: HeaderProps) {
    return (
        <HeaderContainer>
            <Logo />
            <Cart ProductsInCart={ProductsInCart} openDrawer={openDrawer} />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    background-color: #0F52BA;
    color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;





