import React from 'react'
import styled from 'styled-components'
import { Image } from 'cloudinary-react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ExamplePicture from '../components/ExampleImage'

const MainWrapper = styled.section`
`
const StyledGreeting = styled.h2`
  font-weight: 300;
`
const BlockQuote = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: #ADFFCE;
  border-left: 4px solid #41b883;
  p {
    margin-left: 12px;
  }
`
const DescriptionSpan = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 200;
`
const SubTitle = styled.h3`
  font-weight: 300;
  font-size: 14px;
  background: #AAAAAA;
  color: white;
  width: 92px;
  height: 32px;
  margin-bottom: 24px;
  padding: 8px;
  border-radius: 12px;
`
const ExternalLink = styled.a`
  color: #424242;
  text-decoration: underline;
  cursor: pointer;
`
const StyledListItem = styled.li`
  display: block; 
`
const StyledUnorderedList = styled.ul`
  list-style: none;
  ${StyledListItem} {
    margin: 24px auto;
    :before {
      content: "\u26A1";
      margin-right: 12px;
    }
  }
  @media and screen (min-width: 900px) {
    display: block;
    width: 20%;
    margin: 0 auto;
  }
`
const MainContent = styled.div`
  margin-top: 48px;
  height: 300px;
`
const Chapter = styled.article`
  margin-bottom: 32px;
  p {
    text-align: justify;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 900px) {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 24px;    
  }
`
const GroupImage = styled(Image)`
  display: block;
  height: 240px;
  width: 100%;
  margin: 6px auto;
  border-radius: 25px;
  object-fit: cover;
  object-position: 50% 25%;
  @media screen and (min-width: 900px) {
    height: 400px;
  } 
`
const IndexPage = () => (
  <Layout>
    <SEO 
      title="Hello, I am Brecht Nulens" 
      keywords={[`profile`, `presentation`, `Brecht`, `developer`]}
    />
    <MainWrapper>
      <StyledGreeting>Dag Josiane!</StyledGreeting>
      <BlockQuote><p className="quote-text">...en aan ieder die dit leest</p></BlockQuote>
        <MainContent>
          <Chapter>
            <SubTitle className="sub-title">Wie ben ik?</SubTitle>
            <p>Ik ben <ExternalLink href="https://brechtnulens.be" target="__blank" rel="noopener norefferrer">Brecht Nulens</ExternalLink>, 25 jaar oud en een developer uit Hasselt.</p>
            <p>Mijn interesse voor development komt voort uit mijn opleiding Grafisch Ontwerp aan de PXL waar we met Dreamweaver en jQuery simpele layouts maakten voor denkbeeldige bedrijven. Zo raakte ik verkocht aan de wereld van webdesign en development en verliet ik vroegtijdig de schoolbank.</p>
            <p>Via een omweg als netwerkbeheerder ben ik terecht gekomen bij BeCode. Een initiatief waarbij ik enorm veel heb opgestoken en even geëngageerde studenten heb leren kennen.</p>
            <DescriptionSpan>Het BeCode team, ik zit in het midden!</DescriptionSpan>
            <GroupImage
              cloudName="bnulens"
              publicId="gatsby-motivation/becode_hopper.jpg"
              secure="true"
              alt="becode-hopper"
            />
          </Chapter>
          <Chapter>
            <SubTitle className="sub-title">Waarom ik?</SubTitle> 
            <p>Voordat ik begon aan mijn avontuur had ik al wat kennis over netwerken en Linux (Debian & Ubuntu). Zo had ik meer vertrouwen om in de richting van developer te gaan.
            </p>
            <p>Sinds ik met development begonnen ben, heb ik toch al van redelijk wat zaken kunnen proeven. Zo maakte ik onder andere <ExternalLink href="https://brechtnulens.be" target="__blank" rel="noopener norefferrer">mijn portfolio website</ExternalLink> met Vue.js. Daarnaast, een voorbeeld site voor een platenwinkel in Genk <ExternalLink href="https://epic-galileo-8a7f26.netlify.app/" target="__blank" rel="noopener norefferrer">“George & the Bear”</ExternalLink>, met React en <ExternalLink href="https://www.gatsbyjs.com/" target="__blank" rel="noopener norefferrer">Gatsby</ExternalLink>, één van de static site generators en de <ExternalLink href="https://jamstack.org/" target="__blank" rel="noopener norefferrer">JAMstack</ExternalLink> frameworks.</p>
            <ExamplePicture/>
            <StyledUnorderedList>
              <StyledListItem>Vue.js</StyledListItem>
              <StyledListItem>React.js, Gatsby.js & styled components</StyledListItem>
              <StyledListItem>Node.js + Express</StyledListItem>
            </StyledUnorderedList>
            <p>Na de BeCode opleiding, die ondertussen is afgelopen, hou ik me vooral bezig met het volgen van online cursussen, Udemy is één van m’n go-to platformen als ik iets nieuws wil opsteken zoals:</p>
            <StyledUnorderedList>
              <StyledListItem>MVC</StyledListItem>
              <StyledListItem>Templating Engines</StyledListItem>
              <StyledListItem>MongoDB</StyledListItem>
              <StyledListItem>Version Control (Git)</StyledListItem>
            </StyledUnorderedList>
            <p>De JavaScript cursussen van <ExternalLink href="https://wesbos.com/" target="__blank" rel="noopener norefferrer">Wes Bos</ExternalLink> zijn ook super leerrijk alsook verschillende youtube kanalen. Andere goede bronnen zijn: <ExternalLink href="https://www.w3schools.com/" target="__blank" rel="noopener norefferrer">w3schools</ExternalLink>, <ExternalLink href="" target="__blank" rel="noopener norefferrer">stackoverflow</ExternalLink>, <ExternalLink href="https://css-tricks.com/" target="__blank" rel="noopener norefferrer">csstricks</ExternalLink>, <ExternalLink href="https://html5doctor.com" target="__blank" rel="noopener norefferrer">html5doctor</ExternalLink></p>
          </Chapter>
        </MainContent>
      </MainWrapper>
  </Layout>
)

export default IndexPage
