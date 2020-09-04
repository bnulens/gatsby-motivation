import React from 'react'
import styled from "styled-components"

class ReadingProgress extends React.Component {
    state = {
        scrollHeight: 0
    };

    componentDidMount() {
        typeof window !== 'undefined' && window.addEventListener('scroll', this.handleScroll)
    }

    let container = document.querySelector('scroll-test');
    console.log('container', container);

    handleScroll = () => {
        if(typeof window !== 'undefined'){
            this.setState({
                scrollHeight: window.scrollY
            })
        }
    }

    render() {
        const { scrollHeight } = this.state;
        return (
            <div className="scroll-window">{scrollHeight}</div>
        )
    }
}

export default ReadingProgress