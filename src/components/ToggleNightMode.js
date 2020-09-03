import React, {useState, setState} from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    width: 100%;
    height: 10px;
    border: 1px solid blue;
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
        background: #14e081;
    }
    :checked + ${ToggleSlider}:before {
        background: white;
        transform: translateX(20px);
        transition: all 0.4s ease;
    }
    
`

const ToggleNightMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [state, setState] = useState({
        toggleDark: false
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.checked});
    }
    return (
        <ToggleWrapper>
            <ToggleLabel>
                <HiddenLabel/>
                <HiddenInput type="checkbox" name="toggleDark" checked={state.toggleDark} onChange={handleChange}/>
                <ToggleSlider/>
            </ToggleLabel>
        </ToggleWrapper>
    )
}

export default ToggleNightMode
