import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

const Container = styled.div`
width: 100%;
height: 55vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`

const MobileContainer = styled.div`
width: 100%;
height: 60vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding-bottom: 8rem;
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

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 30%;
height: auto;
margin-top: 2rem;
`

const ProductTitle = styled.a`
padding: 50px 50px;
border-radius: 5px;
background-color: blue;
text-decoration: none;
color: white;
font-weight: bold;
font-size: 20px;
`

const MobileHeader = styled.div`
width: 80%;
margin: 0rem auto 2rem;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 40px;
color: red;
`

const MobileBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
height: 70%;
margin-top: 1rem;
`

const MobileProductTitle = styled.a`
padding: 40px 30px;
background-image: linear-gradient(to right, #009b56, #018594, #007aab, #018594, #009b56);
border-radius: 5px;
color: white;
font-weight; bold;
font-size: 20px;
text-decoration: none;
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
            <Fragment style={{ height: '70vh' }}>
                <Navbar />
                <Header>New Products</Header>
                {/* <Container>
                    <img src={Logo1} style={{ height: '75px', width: '100px', marginRight: '0.5rem' }} alt='Logo' />
                    <Content>Under Construction</Content>
                    <Content style={{color: 'red', marginTop: '0.4rem'}}>(Should be ready by Nov 2022)</Content>
                </Container> */}
                <Container>
                    <Box>
                        <ProductTitle href='/new-products/paint-rollers' style={{ backgroundImage: 'linear-gradient(to right, #009b56, #018594, #007aab, #018594, #009b56)', }}>Paint Rollers</ProductTitle>
                        <ProductTitle href='/new-products/paint-brushes' style={{ backgroundImage: 'linear-gradient(to right, #009b56, #018594, #007aab, #018594, #009b56)', }}>Paint Brushes</ProductTitle>
                    </Box>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <MobileHeader>
                    <p>New Products</p>
                </MobileHeader>
                <MobileContainer>
                    <MobileBox>
                        <MobileProductTitle href='/new-products/paint-rollers'>Paint Rollers</MobileProductTitle>
                        <MobileProductTitle href='/new-products/paint-brushes'>Paint Brushes</MobileProductTitle>
                    </MobileBox>
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