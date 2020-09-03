import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import '../scss/global.scss'
import CustomFooter from './footer'

const Container = styled.div`
  height: 100vh;

  @media screen and (min-width: 900px) {
    display: flex;
    align-items: center;

    ::before {
      content: "";
      position: absolute;
      background: ${props => props.darkMode ? '#555' : 'grey'};
      width: 100%;
      height: 100vh;
      z-index: -6;
    }
  }
`
const Shape = styled.svg`
  position: absolute;
  height: 300px;
  width: 300px;

  circle {
    fill: green;
  }
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 900px;
  height: auto;
  padding: 0 16px;

  @media screen and (min-width: 900px){
    position: relative;
    width: 868px;
    margin: -72px auto 0px;

    ::before {
      content: "";
      position: absolute;
      background: #41b883;
      width: 100%;
      height: 120%;
      top: 0;
      left: 0;
      transform: rotate(3deg);
      -webkit-transform: rotate(3deg);
      -moz-transform: rotate(3deg);
      z-index: -4;
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
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container darkMode={darkMode}>
      <Shape onClick={() => setDarkMode(!darkMode)}>
        <circle cx="50" cy="50" r="40"/>
      </Shape> 
      <StyledWrapper className={darkMode ? "dark-mode" : "light-mode"}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <CustomFooter/>
      </StyledWrapper>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
