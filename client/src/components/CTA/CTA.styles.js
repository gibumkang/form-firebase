import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    max-width: 110rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    div {
        flex: 1;
    }
    @media screen and (max-width: 570px){
        display: block;
    }
`