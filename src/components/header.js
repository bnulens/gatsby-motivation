import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import HeaderNav from "./navbar/Navbar"

const StyledHeader = styled.header`
  position: relative;
  margin-bottom: 24px;
  ::before {
    content: "";
    position: absolute;
    background: #ADFFCE;
    width: 100%;
    height: 52px;
    -webkit-clip-path: polygon(0 0, 100% 0,100% 40%, 0 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 40%, 0 100%);
    z-index: -5;
  }
`

const MainTitle = styled.h1`
  width: 45%;
  font-size: 28px;
  padding: 6px;
  .title-first-name {
    font-weight: 700;
    text-transform: uppercase;
  }
  .title-last-name {
    font-weight: 100;
    text-transform: uppercase;
  }
`

const Header = () => (
  <StyledHeader>
    <MainTitle>
      <span className="title-first-name">Brecht</span>
      <span className="title-last-name">Nulens</span>
    </MainTitle>
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
