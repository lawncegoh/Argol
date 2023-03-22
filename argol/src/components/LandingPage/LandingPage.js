import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Navbar';
import styled from 'styled-components';
import Cover from '../../assets/test2.png'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-size:cover;
    padding-bottom: 30px;
`

const Image = styled.img`
width: 30%;
`

const MobileContainer = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-size:cover;
    padding-bottom: 5px;
`

const MobileImage = styled.img`
width: 100%;
`

const LandingPage = () => {

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
                <Container>
                    <span style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '0.6rem'}}>www.argol.com.sg</span>
                    <Image src={Cover} />
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <MobileContainer>
                    <span style={{fontSize: '18px', fontWeight: 'bold', alignItems: 'left'}}>www.argol.com.sg</span>
                    <MobileImage src={Cover} />
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

export default LandingPage