import React from 'react'
import { Image } from 'cloudinary-react'
import styled from 'styled-components'
import Flex from './Flex'

const ExampleWrapper = styled(Flex)`
    position: relative;
    height: auto;
`
const LinkWrapper = styled.a`
    display: block;
`
const GatsbyExample = styled(Image)`
    position: relative;
    display: block;
    top: 0;
    right: 0;
    width: auto;
`
// const VueExample = styled(Image)`
//     position: relative;
//     display: block;
//     top: 50px;
//     right: 0;
//     object-fit: cover;
//     object-position: 0% 0%;
//     clip-path: polygon(70% 0, 100% 0, 100% 100%, 20% 100%);
//     @media screen and (min-width: 900px) {
//         top: 0;
//         height: 106%;
//     }
// `
const ExamplePicture = () => {
  return (
    <>
    <ExampleWrapper alignItems="center" justifyContent="center">
        <LinkWrapper
            href="https://epic-galileo-8a7f26.netlify.app/"
            target="__blank"
            rel="noopener noreferrer"
        >
            <GatsbyExample
                cloudName="bnulens"
                publicId="gatsby-motivation/record_store.png"
                secure="true"
                alt="record-store"
            />
        </LinkWrapper>
        {/* <LinkWrapper
            href="https://brechtnulens.be/"
            target="__blank"
            rel="noopener noreferrer"
        >
            <VueExample
                cloudName="bnulens"
                publicId="gatsby-motivation/profile-website.png"
                secure="true"
                alt="record-store"
            />
        </LinkWrapper> */}
    </ExampleWrapper>
    </>
  )
}

export default ExamplePicture
