import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "../scss/global.scss"

const StyledWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
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
      <body>
        <StyledWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer>
            &copy; {new Date().getFullYear()}
          </footer>
        </StyledWrapper>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
