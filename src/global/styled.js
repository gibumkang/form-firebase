import styled from 'styled-components';

export const Copy = styled.div`
    max-width: 40rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    padding: 2.5rem;
    @media screen and (max-width: 850px){
        h1, h2 {
            font-size: 4.5vw;
        }
        p {
            font-size: 2.5vw;
        }
    }
    @media screen and (max-width: 570px){
        h1, h2 {
            font-size: 3rem;
        }
        p {
            font-size: 2rem;
        }
    }
`

export const Block = styled.div`
    max-width: 17rem;
    height: .5rem;
    background: #fff;
    margin: 2.5rem auto;
`