import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import HeaderNav from "./navbar/Navbar"

const MainTitle = styled.h1`
  display: block;
  color: rebeccapurple;
  width: 100%;
  span {
    margin: 0 6px;
  }
`

const Header = () => (
  <header>
    <MainTitle>
      <span>Brecht</span>
      <span>Nulens</span>
    </MainTitle>
    <HeaderNav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
