import React from "react"
import { Image } from "cloudinary-react"
import styled from "styled-components"

const StyledProfilePicture = styled(Image)`
  position: absolute;
  border: 4px solid white;
  border-radius: 50%;
  top: 15px;
  right: 0;
  width: 110px;
  height: 110px;
  -webkit-box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
  -moz-box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
  box-shadow: 0px 9px 35px -14px rgba(66,66,66,0.75);
`
const ProfilePicture = () => {
  return (
    <>
      <StyledProfilePicture 
        cloudName="bnulens"
        publicId="gatsby-motivation/profile_picture.png"
        secure="true"
        alt="brecht-nulens-profile"
      />
    </>
  )
}

export default ProfilePicture
