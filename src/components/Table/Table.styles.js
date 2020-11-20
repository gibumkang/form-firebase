import styled from 'styled-components';

export const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`

export const MainTable = styled.table`
    text-align: center;
    td {
        color: #949191;
        font-family: ${props => props.theme.fonts.header};
    }
    th {
        font-weight: normal;
    }
    td, th {
        font-size: 2.5rem;
        @media screen and (max-width: 1100px){
            font-size: 1.9rem;
        }
    }
`

export const Td = styled.td`
    color: ${props => props.theme.colors.primary} !important;
`

export const CarHeader = styled.th`
    width: 39rem;
    position: relative;
    img {
        max-width: 32rem;
        @media screen and (max-width: 1100px){
            display: none;
        }
    }
`

export const LogoHeader = styled.th`
    width: 27rem;
    img {
        padding: 1.5rem 2.5rem;
    }
`