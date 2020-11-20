import React from 'react';
import styled from 'styled-components';
import Allstate from '../../assets/allstate.png';

const MainHeader = styled.header`
    width: 100%;
    padding: 2.5rem 0rem 7rem 0rem;
    img {
        display: block;
        margin: 0 auto;
        max-width: 30rem;
    }
    @media screen and (max-width: 570px){
        padding-bottom: 2.5rem;
        img {
            max-width: 15rem;
        }
    }
`

const Header = () => {
    return (
        <MainHeader>
            <img src={Allstate} alt="All State"/>
        </MainHeader>
    )
}

export default Header;