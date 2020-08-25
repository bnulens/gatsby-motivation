import React, { useState } from "react"
import styled from "styled-components"
import Flex from "../Flex"

import NavbarLinks from "./NavbarLinks"
const SocialBar = styled.nav`

`

const HeaderNav = () => {
    return (
        <SocialBar>
            <NavbarLinks justifyContent="space-between" alignItems="center"/>
        </SocialBar>
    )
}

export default HeaderNav