import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Logo1 from '../../assets/logo1.png'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 5rem;
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
            <Container>
                <img style={{ width: '10%', height: '18%' }} src={Logo1} alt='Argol' />
                <Content>Under Construction</Content>
            </Container>
        )
    }

    const displayMobile = () => {
        return (
            <Container>
                <img style={{ width: '32%', height: '18%' }} src={Logo1} alt='Argol' />
                <MobileContent>Under Construction</MobileContent>
            </Container>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default Construction