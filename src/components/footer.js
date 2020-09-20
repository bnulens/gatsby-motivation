import React from "react"
import styled from "styled-components"

import Flex from "./Flex"

const StyledFooter = styled.footer`
    postion: relative;
`
const FooterWrapper = styled(Flex)`
    position: absolute;
    font-family: 'Helvetica';
    background: #ADFFCE;
    height: 50px;
    width: 100%;
    margin-left: -16px;
    span {
        margin: 0 auto;
        color: grey;
    }
`

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <StyledFooter>
            <FooterWrapper alignItems="center">
                <span>&copy; {thisYear}</span>
            </FooterWrapper>
        </StyledFooter>
    )
}

export default Footer