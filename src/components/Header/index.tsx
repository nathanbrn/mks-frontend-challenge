import styled from "styled-components";
import { Logo } from "./Logo";
import { Cart } from "./Cart";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    openDrawer: (newOpen: boolean) => () => void;
}

export function Header({ openDrawer }: HeaderProps) {
    return (
        <HeaderContainer>
            <Logo />
            <Cart openDrawer={openDrawer} />
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





