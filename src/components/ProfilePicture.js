import React from "react"
import { Image } from "cloudinary-react"
import styled from "styled-components"

const StyledProfilePicture = styled(Image)`
  display: block;
  position: absolute;
  top: 15px;
  right: 0;
  width: 110px;
  height: 110px;
  background: #41B883;
  border: 4px solid white;
  border-radius: 50%;
  object-fit: cover;
  object-position: 100% 30%;
  -webkit-box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
  -moz-box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
  box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
  @media screen and (min-width: 900px) {
    width: 164px;
    height: 164px;
  }
`
const ProfilePicture = () => {
  return (
    <>
      <StyledProfilePicture 
        cloudName="bnulens"
        publicId="gatsby-motivation/profile_picture_original.png"
        secure="true"
        alt="brecht-nulens-profile"
      />
    </>
  )
}

export default ProfilePicture
