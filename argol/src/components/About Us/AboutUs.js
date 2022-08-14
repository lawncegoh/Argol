import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`

const PageHeader = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    background: grey;
`

const InnerContainer = styled.div`
    display: flex;
    margin: auto;
    width: 500px;
    height: 500px;
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
    -moz-box-shadow:    3px 3px 5px 5px #ccc;
    -webkit-box-shadow: 3px 3px 5px 5px #ccc;
    box-shadow:         3px 3px 5px 5px #ccc;
`

const InnerHeader = styled.div`
    color: black;
    margin: auto;
    font-weight: bold;
`

const InnerPara = styled.div`
    color: black;
    margin: auto;
    width: 80%;
`

const AboutUs = () => {
    return (
        <Fragment>
            <Navbar/>
            <Container>
                <PageHeader>About Argol</PageHeader>
            </Container>
            <Container>
                <InnerContainer>
                    <InnerHeader>
                        <p>Who We Are</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>Established in 2003, Argol is probably the market's favourite decorating brand. Innovation is the company's passion and this can be seen in
                        brushes, rollers and tools. Hence, Argol's competitive advantages lie solely in innovation and product differentiations.</p>
                    </InnerPara>
                </InnerContainer>
            </Container>
        </Fragment>
    )
}

export default AboutUs
