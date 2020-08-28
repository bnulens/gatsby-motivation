import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Flex from "./Flex"
import HeaderNav from "./navbar/Navbar"
import ProfilePicture from "./ProfilePicture"

const StyledHeader = styled.header`
  margin-bottom: 24px;
  ::before {
    content: "";
    position: absolute;
    background: #ADFFCE;
    width: 120%;
    height: 82px;
    left: -16px;
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 100%);
    -webkit-clip-path: polygon(0 0, 100% 0,100% 50%, 0 100%);
    z-index: -1;
  }
`

const TitleWrapper = styled(Flex)`
  position: relative;
`

const MainTitle = styled.h1`
  width: 50%;
  font-size: 40px;
  padding-top: 24px;
  .title-first-name {
    font-weight: 500;
    text-transform: uppercase;
  }
  .title-last-name {
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const Header = () => (
  <StyledHeader>
    <TitleWrapper justifyContent="space-between" alignItems="center">
      <MainTitle>
        <span className="title-first-name">Brecht </span><span className="title-last-name">Nulens</span>
      </MainTitle>
      <ProfilePicture/>
    </TitleWrapper>
    <HeaderNav/>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
