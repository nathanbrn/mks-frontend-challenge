import styled from "styled-components";

export function Logo() {
    return (
        <ContainerLogo>
            <TextPrimary>MKS</TextPrimary><TextSecundary>Sistemas</TextSecundary>
        </ContainerLogo>
    );
}

const ContainerLogo = styled.div`
    margin-left:50px;
    cursor: default;
`;

const TextPrimary = styled.span`
    font-size: 40px;
    font-weight: 600;
    margin-right: 4px;
`;
const TextSecundary = styled.span`
    font-size: 20px;
    font-weight: 300;
`;