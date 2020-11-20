import React from 'react'
import styled from 'styled-components';

const MainFooter = styled.footer`
    color: #fff;
    text-align: center;
    font-size: 1.4rem;
    padding: 5rem 2.5rem;
    span {
        font-weight: bold;
        text-decoration: underline;
    }
`

const Footer = () => {
    return (
        <MainFooter>&copy;{new Date().getFullYear()} All Rights Reserved. <span>Privacy Policy</span> | <span>Terms &amp; Conditions</span></MainFooter>
    )
}

export default Footer;