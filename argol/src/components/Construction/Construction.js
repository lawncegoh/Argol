import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Logo1 from '../../assets/logo1.png'

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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

const Construction = () => {
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
                <Container>
                    <img src={Logo1} style={{ height: '100px', width: '125px', marginRight: '0.5rem' }} alt='Logo' />
                    <Content>Under Construction</Content>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
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

export default Construction