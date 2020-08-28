import React from "react"
import styled from "styled-components"

import Flex from "./Flex"

const StyledFooter = styled.footer`
    background: #ADFFCE;
    height: 100px;
`
const FooterWrapper = styled(Flex)`
    width: 100%;
    font-family: 'Helvetica';
    span {
        margin: 0 auto;
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