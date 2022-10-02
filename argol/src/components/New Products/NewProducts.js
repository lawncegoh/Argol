import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Logo1 from '../../assets/logo1.png'

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 6rem;
`

const MobileContainer = styled.div`
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 8rem;
`

const Content = styled.p`
font-size: 32px;
font-weight: bold;
text-align: center;
`

const MobileContent = styled.p`
font-size: 22px;
font-weight: bold;
text-align: center;
`

const Header = styled.div`
width: 80%;
margin: 0rem auto 1rem;
height: 70px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 46px;
letter-spacing: 2px;
color: red;
`

const NewProducts = () => {

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
                <Header>New Products</Header>
                <Container>
                    <img src={Logo1} style={{ height: '75px', width: '100px', marginRight: '0.5rem' }} alt='Logo' />
                    <Content>Under Construction</Content>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <MobileContainer>
                    <img style={{ width: '35%', height: '20%' }} src={Logo1} alt='Argol' />
                    <MobileContent>Under Construction</MobileContent>
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

export default NewProducts