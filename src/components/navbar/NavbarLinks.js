import React from 'react'
import styled from 'styled-components'
import Flex from '../Flex'

import Globe from '../../icons/globe.svg'
import GitHub from '../../icons/github.svg'
import LinkedIn from '../../icons/linkedin.svg'

const SocialContainer = styled(Flex)`
    span {
        z-index: 2;
    }
`
const SocialLink = styled.a`
    margin-right: 6px;
    margin-left: 6px;
    transition: all ease 0.4s;
    z-index: 2;
    :first-child {
        margin-left: 0;
    }
    :focus {
        outline: none;
    }
`
const SocialLinkWrapper = styled(Flex)`
    span {
        display: block;
        margin-left: 6px;
        font-size: 12px;
        transition: all ease 0.2s;
        :hover {
            color: #41b883;
        }
    }
`
const NavbarLinks = () => {
    return (
        <SocialContainer alignItems="center">
            <SocialLink 
                className="social-link"
                href="https://brechtnulens.be/"
                target="__blank"
                rel="noopener noreferrer"
            >
                <SocialLinkWrapper justifyContent="flex-start" alignItems="center">
                    <Globe width="16" height="16"/>
                    <span>Website</span>
                </SocialLinkWrapper>
            </SocialLink>
            <span>|</span>
            <SocialLink 
                className="social-link"
                href="https://github.com/bnulens"
                target="__blank"
                rel="noopener noreferrer"
            >
                <SocialLinkWrapper justifyContent="flex-start" alignItems="center">
                    <GitHub width="16" height="16"/>
                    <span>GitHub</span>
                    
                </SocialLinkWrapper>
            </SocialLink>
            <span>|</span>
            <SocialLink 
                className="social-link"
                href="https://linkedin.com/in/brecht-nulens/"
                target="__blank"
                rel="noopener noreferrer"
            >
                <SocialLinkWrapper justifyContent="space-between" alignItems="center">
                    <LinkedIn width="16" height="16"/>
                    <span>LinkedIn</span>
                </SocialLinkWrapper>
            </SocialLink>
        </SocialContainer>
    )
}
export default NavbarLinks