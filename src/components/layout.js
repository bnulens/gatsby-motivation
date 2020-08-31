import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "../scss/global.scss"
import CustomFooter from "./footer"

const StyledBody = styled.body`
  height: 100vh;
  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;
    ::before {
      content: "";
      position: absolute;
      background: grey;
      width: 100%;
      height: 100%;
      z-index: -6;
    }
  }
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 900px;
  height: auto;
  padding: 0 16px;
  background: white;
  @media screen and (min-width: 900px){
    position: relative;
    width: 868px;
    margin: -72px auto 0px;
    ::before {
      content: "";
      position: absolute;
      background: #F7E7D7;
      width: 100%;
      height: 120%;
      top: 0;
      left: 0;
      z-index: -4;
      transform: rotate(3deg);
      -webkit-transform: rotate(3deg);
      -moz-transform: rotate(3deg);
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledBody>
        <StyledWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <CustomFooter/>
        </StyledWrapper>
      </StyledBody>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
