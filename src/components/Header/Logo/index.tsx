import styled from "styled-components";
import { motion } from "framer-motion";

export function Logo() {
    return (
        <motion.div
            style={{
                marginLeft:50,
                cursor: 'default'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <TextPrimary>MKS</TextPrimary><TextSecundary>Sistemas</TextSecundary>
        </motion.div>
    );
}

const TextPrimary = styled.span`
    font-size: 40px;
    font-weight: 600;
    margin-right: 4px;
`;
const TextSecundary = styled.span`
    font-size: 20px;
    font-weight: 300;
`;