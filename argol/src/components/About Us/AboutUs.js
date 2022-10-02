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
margin-bottom: 2rem;
font-size: 15px;
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
                    <Content>
                        <p style={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem', marginTop: '3rem' }}>proudly singaporean since 2004</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>1986 - 1999</p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            A veteran in the paint brushes and paint rollers industry since 1986! Lawrence T P Goh, the name known to many Hardware and Paint resellers
                            in East & West Malaysia, Brunei, Indonesia and Hongkong. Having worked for England and Europe's well-known brand Harris, for 9 years. Through
                            Harris Lawrence has also worked alongside with another well-known German brand; Fia.
                        </p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            In 1994, when Stanley Tools, USA, acquired American Brush Company (ABC),
                            Germany's Friess and England's Mosley Stone, Lawrence was poached. And
                            worked for Stanley Tools, Singapore.
                        </p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            Core responsibility. Solely to develop and strategise Stanley's Growth Strategy;
                            market & product developments and market penetration for incremental
                            revenues and market's shares.
                        </p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            Through these opportunities, Lawrence gained and progressed well with
                            products' manufacturing, technicality and materials - Paint brushes and
                            paint rollers!
                        </p>
                    </Content>
                    <Content>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>2000</p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            In this millennium, Lawrence joined Germany's Cristin. To set up their subsidiary
                            office in Singapore. As a Shareholder and Director.
                        </p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            In 2004, Argol & Company Pte Ltd was set-up. To capitalise on market's growth
                            and potentials.  And also opportunities for product developments.
                        </p>
                        <p style={{ marginBottom: '0.8rem' }}>
                            And today, Argol brand may not be a market brand leader. But definitely and
                            truly, a brand that emphasises Product Differentiation as its Competitive Advantages.
                            Every material used has its specific role. Hence, Argol's products do dominant over
                            competitors. We usually lead but hardly follow.
                        </p>
                        <p>As Argol's tagline: *Performance Focussed* / * Before you start, think of the finish*</p>
                    </Content>
                    <Content>
                        <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>Philosophy</p>
                        <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: '18px' }}>We do not believe in "The Best" but only "The Better"</p>
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
                    <MobileContent>
                        <p style={{ fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem', marginTop: '3rem' }}>proudly singaporean since 2004</p>
                        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>1986 - 1999</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            A veteran in the paint brushes and paint rollers industry since 1986! Lawrence T P Goh, the name known to many Hardware and Paint resellers
                            in East & West Malaysia, Brunei, Indonesia and Hongkong. Having worked for England and Europe's well-known brand Harris, for 9 years. Through
                            Harris Lawrence has also worked alongside with another well-known German brand; Fia.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In 1994, when Stanley Tools, USA, acquired American Brush Company (ABC),
                            Germany's Friess and England's Mosley Stone, Lawrence was poached. And
                            worked for Stanley Tools, Singapore.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Core responsibility. Solely to develop and strategise Stanley's Growth Strategy;
                            market & product developments and market penetration for incremental
                            revenues and market's shares.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Through these opportunities, Lawrence gained and progressed well with
                            products' manufacturing, technicality and materials - Paint brushes and
                            paint rollers!
                        </p>
                    </MobileContent>
                    <MobileContent>
                        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>2000</p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In this millennium, Lawrence joined Germany's Cristin. To set up their subsidiary
                            office in Singapore. As a Shareholder and Director.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In 2004, Argol & Company Pte Ltd was set-up. To capitalise on market's growth
                            and potentials.  And also opportunities for product developments.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            And today, Argol brand may not be a market brand leader. But definitely and
                            truly, a brand that emphasises Product Differentiation as its Competitive Advantages.
                            Every material used has its specific role. Hence, Argol's products do dominant over
                            competitors. We usually lead but hardly follow.
                        </p>
                        <p>As Argol's tagline: *Performance Focussed* / * Before you start, think of the finish*</p>
                    </MobileContent>
                    <MobileContent>
                        <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>Philosophy</p>
                        <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: '15px' }}>We do not believe in "The Best" but only "The Better"</p>
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
