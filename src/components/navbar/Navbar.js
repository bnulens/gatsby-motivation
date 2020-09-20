import React from "react"
import styled from "styled-components"

import NavbarLinks from "./NavbarLinks"

const SocialBar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
const HeaderNav = ({ children }) => {
    return (
        <SocialBar>
            <NavbarLinks />
            {children}
        </SocialBar>
    )
}

export default HeaderNav