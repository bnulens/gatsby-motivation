import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import '../scss/global.scss'
import Header from './header'
import CustomFooter from './footer'
import Flex from './Flex'
import ToggleNightMode from './ToggleNightMode'

const Container = styled(Flex)`
  height: 100vh;
  @media screen and (min-width: 900px) {
    ::before {
      content: "";
      position: absolute;
      background: ${props => props.darkMode ? '#555' : 'grey'};
      width: 100%;
      height: 200vh;
      z-index: -6;
    }
  }
`
const StyledWrapper = styled.div`
  position: relative;
  max-width: 900px;
  height: auto;
  padding: 0 16px;

  @media screen and (min-width: 900px) {
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
    <Container darkMode={darkMode} alignItems="center" justifyContent="center">
      <StyledWrapper className={darkMode ? "dark-mode" : "light-mode"}>
        <Header siteTitle={data.site.siteMetadata.title}>
          <ToggleNightMode value={darkMode} setDark={setDarkMode}/>
        </Header>
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
