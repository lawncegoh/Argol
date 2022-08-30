import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Container = styled.div`
width: 50%;
margin: 0rem auto 3rem;
text-align: justify;
border: 1px solid rgba(0,0,0,0.1);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
-moz-box-shadow:    3px 3px 5px 5px #ccc;
-webkit-box-shadow: 3px 3px 5px 5px #ccc;
box-shadow:         3px 3px 5px 5px #ccc;
`

const Header = styled.div`
width: 80%;
margin: 0rem auto 2rem;
height: 70px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 46px;
color: red;
`

const MobileHeader = styled.div`
width: 80%;
margin: 0rem auto 1.5rem;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 46px;
color: #a6a6a6;
color: red;
`

const MobileContainer = styled.div`
width: 85%;
margin: 0rem auto 3rem;
text-align: justify;
border: 1px solid rgba(0,0,0,0.1);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
-moz-box-shadow:    3px 3px 5px 5px #ccc;
-webkit-box-shadow: 3px 3px 5px 5px #ccc;
box-shadow:         3px 3px 5px 5px #ccc;
`



const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
width: 60%;
margin-bottom: 3.5rem;
font-size: 16px;
`

const MobileContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
width: 80%;
margin-bottom: 2.5rem;
font-size: 15px;
`

const Heading = styled.p`
text-align: center;
font-size: 17px;
font-weight: bold;
margin-bottom: 1.5rem;
`

const AboutUs = () => {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1100
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayDesktop = () => {
        return (
            <Fragment>
                <Navbar />
                <Header>
                    <p>About Us</p>
                </Header>
                <Container>
                    <Content style={{ marginTop: '3rem' }}>
                        <Heading>Who we are</Heading>
                        <p>Established in 2003, Argol is probably the market's favourite decorating brand. Innovation is the company's passion and this can be seen in
                            brushes, rollers and tools. Hence, Argol's competitive advantages lie solely in innovation and product differentiations.</p>
                    </Content>
                    <Content>
                        <Heading>Our Experiences and Product Knowledge</Heading>
                        <p>The founder of this company had worked in/worked with well-known brands like Harris, Mosley Stone, Friess, FIA, America Brush Company,
                            Stanley, Cristin and others since 1986.</p>
                    </Content>
                    <Content>
                        <Heading>Our Vision</Heading>
                        <p>Singapore's known decorating brand for its fine finishing and performance since 2003. Since then, we have been helping professional painters
                            to save costs and users to accept better; their painting finishing. We provide a range of paint rollers, paint brushes and painting tools.</p>
                    </Content>
                    <Content>
                        <Heading>Our Aim</Heading>
                        <p>To help Painting Contractors make painting/repairing and decorating easier. Saving time and costs; less time and less paint coat. More acceptance
                            and no rejection.</p>
                    </Content>
                    <Content>
                        <Heading>Our Philosophy</Heading>
                        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>We do not believe in "The Best" but only "The Better"</p>
                    </Content>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <MobileHeader>
                    <p>About Us</p>
                </MobileHeader>
                <MobileContainer>
                    <MobileContent style={{ marginTop: '3rem' }}>
                        <Heading>Who we are</Heading>
                        <p>Established in 2003, Argol is probably the market's favourite decorating brand. Innovation is the company's passion and this can be seen in
                            brushes, rollers and tools. Hence, Argol's competitive advantages lie solely in innovation and product differentiations.</p>
                    </MobileContent>
                    <MobileContent>
                        <Heading>Our Experiences and Product Knowledge</Heading>
                        <p>The founder of this company had worked in/worked with well-known brands like Harris, Mosley Stone, Friess, FIA, America Brush Company,
                            Stanley, Cristin and others since 1986.</p>
                    </MobileContent>
                    <MobileContent>
                        <Heading>Our Vision</Heading>
                        <p>Singapore's known decorating brand for its fine finishing and performance since 2003. Since then, we have been helping professional painters
                            to save costs and users to accept better; their painting finishing. We provide a range of paint rollers, paint brushes and painting tools.</p>
                    </MobileContent>
                    <MobileContent>
                        <Heading>Our Aim</Heading>
                        <p>To help Painting Contractors make painting/repairing and decorating easier. Saving time and costs; less time and less paint coat. More acceptance
                            and no rejection.</p>
                    </MobileContent>
                    <MobileContent>
                        <Heading>Our Philosophy</Heading>
                        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>We do not believe in "The Best" but only "The Better"</p>
                    </MobileContent>
                </MobileContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default AboutUs
