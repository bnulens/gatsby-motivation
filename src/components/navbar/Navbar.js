import React from "react"
import styled from "styled-components"

import NavbarLinks from "./NavbarLinks"

const SocialBar = styled.nav`

`

const HeaderNav = () => {
    return (
        <SocialBar>
            <NavbarLinks/>
        </SocialBar>
    )
}

export default HeaderNav