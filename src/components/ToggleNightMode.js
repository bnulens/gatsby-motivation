import React from 'react';
import styled from 'styled-components';

import NightIcon from '../icons/moon.svg'
import DayIcon from '../icons/sun.svg'

const ToggleWrapper = styled.div`
    position: absolute;
    top: 198px;
    left: 310px;
    z-index: 5;

    @media screen and (min-width: 485px) {
        top: 202px;
        left: 400px;
    }

    @media screen and (min-width: 485px) {
        top: 160px;
        left: 550px;
    }
    
    @media screen and (min-width: 900px) {
        top: 172px;
        left: 730px;
    }
`
const ToggleLabel = styled.label`
    position: relative;
    display: inline-block;
    margin-right: 20px;
    width: 20px;
    height: 24px;
`
const HiddenLabel = styled.label`
    position: absolute !important;
    display: inline-block;
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
`

const ToggleSlider = styled.span`
    position: relative;
    display: block;
    background: grey;
    width: 40px;
    height: 20px;
    inset: 0px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.4s ease 0s;

    ::before { 
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        ${'' /* background-image: radial-gradient(white, white, lightgrey); */}
        background: #555;
        border-radius: 50%;
        transition: all 0.4s ease;
    }
`
const HiddenInput = styled.input`
    width: 0px;
    height: 0px;
    opacity: 0;

    :checked + ${ToggleSlider} {
        background: #41b883;
        transition: all 0.4s ease;
    }
    :checked + ${ToggleSlider}:before {
        background: white;
        transform: translateX(20px);
        transition: all 0.4s ease;
    }
`

const Moon = styled(NightIcon)`
    position: absolute;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    fill: white;
    transition: all 1s ease;
`
const Sun = styled(DayIcon)`
    position: absolute;
    top: 4px;
    left: 24px;
    width: 12px;
    height: 12px;
    fill: white;
    transition: all 1s ease;
`
const ToggleNightMode = ({ value, setDark }) => {
    return (
        <ToggleWrapper>
            <ToggleLabel>
                <HiddenLabel/>
                <HiddenInput type="checkbox" name="toggleDark" checked={value} onChange={() => setDark(!value)}/>
                <ToggleSlider>
                    { value ? <Moon/> : <Sun/> }
                </ToggleSlider>
            </ToggleLabel>
        </ToggleWrapper>
    )
}

export default ToggleNightMode
