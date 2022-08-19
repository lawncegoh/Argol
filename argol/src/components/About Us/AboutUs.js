import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import AboutUsBanner from '../../assets/aboutus.png';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    background-size:cover;
`

const WordsContainer = styled.div`
    width: 1000px;
    height: 1000px;
    display: flex;
    justify-content: center;
    margin: auto;

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
    width: 70%;
    height: 80%;
    background: white;
    flex-direction: column;
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
                <img src={AboutUsBanner}/>
            </Container>
            <WordsContainer>
                <InnerContainer>
                    <InnerHeader>
                        <p>Who We Are</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>Established in 2003, Argol is probably the market's favourite decorating brand. Innovation is the company's passion and this can be seen in
                        brushes, rollers and tools. Hence, Argol's competitive advantages lie solely in innovation and product differentiations.</p>
                    </InnerPara>
                    <InnerHeader>
                        <p>Our Experiences and Product Knowledge</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>The founder of this company had worked in/worked with well-known brands like Harris, Mosley Stone, Friess, FIA, America Brush Company,
                            Stanley, Cristin and others since 1986.
                        </p>
                    </InnerPara>
                    <InnerHeader>
                        <p>Our Vision</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>Singapore's known decorating brand for its fine finishing and performance since 2003. Since then, we have been helping professional painters
                            to save costs and users to accept better; their painting finishing. We provide a range of paint rollers, paint brushes and painting tools.
                        </p>
                    </InnerPara>
                    <InnerHeader>
                        <p>Our Aim</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>To help Painting Contractors make painting/repairing and decorating easier. Saving time and costs; less time and less paint coat. More acceptance
                            and no rejection.
                        </p>
                    </InnerPara>
                    <InnerHeader>
                        <p>Our Philosophy</p>
                    </InnerHeader>
                    <InnerPara>
                        <p>We do not believe in "The Best" but only "The Better"</p>
                    </InnerPara>
                </InnerContainer>
            </WordsContainer>
        </Fragment>
    )
}

export default AboutUs
