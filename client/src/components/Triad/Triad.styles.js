import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: ${props => props.theme.maxWidth};
    margin: 15rem auto;
    div {
        flex: 1;
        margin: 0 auto;
    }
    @media screen and (max-width: 620px){
        display: block;
        margin: 10rem auto;
        div {
            margin: 3.5rem auto;
        }
    }
`

export const Ad = styled.div`
    max-width: 33rem;
    text-align: center;
    padding: 0rem 1.5rem;
    color: #fff;
    p {
        font-size: ${props => props.theme.fonts.reading};
        strong {
            color: #fff;
        }
    }
    img {
        max-width: 14rem;
        height: 14rem;
    }
    @media screen and (max-width: 875px){
        p {
            font-size: 1.7rem;
        }
        h2 {
            font-size: 3rem;
        }
        img {
            max-width: 8rem;
            height: 10rem;
        }
    }
`