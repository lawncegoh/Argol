import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import ContactUsPic from '../../assets/contactus.jpg';


const Container = styled.div`
width: 90%;
height: 100%;
margin: auto;
position: relative;
font-weight: bold;
`

const MobileContainer = styled.div`
width: 100%;
margin: auto;
position: relative;
`

const Content = styled.div`
position: absolute;
top: 0%;
right: 30%;
color: black;
background-color: white;
font-size: 15px;
padding: 50px 70px 50px 70px;
text-align: left;
`

const MobileContent = styled.div`
position: absolute;
top: 5%;
right: 5%;
color: black;
background-color: white;
font-size: 14px;
padding: 20px 20px 20px 20px;
text-align: left;
font-weight: bold;
`

const Image = styled.img`
width: 45%;
margin: auto;
align-items: center;
text-align: center;
display: flex;
justify-content: center;
`

const MobileImage = styled.img`
width: 100%;
margin: auto;
align-items: center;
text-align: center;
display: flex;
justify-content: center;
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


const ContactUs = () => {

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
                    <p>Contact Us</p>
                </Header>
                <Container>
                    <Image src={ContactUsPic} />
                    <Content>
                        <p style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '0.6rem' }}>Argol & Company Pte Ltd</p>
                        <p style={{textAlign: 'center', marginBottom: '2rem'}}>60 Paya Lebar Road<br/>#07-54 Paya Lebar Square<br/>Singapore 409051</p>
                        <p style={{ fontSize: '17px', marginBottom: '0.6rem' }}>We welcome all enquires</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Wholesaling / Distributing</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Volume / Quantity Purchases</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Private / Generic Branding</p>
                        <p style={{ marginTop: '1.2rem', marginBottom: '0.6rem', fontSize: '17px' }}>Kindly email / Whatsapp</p>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '0.6rem' }}>
                            <p style={{ marginRight: '0.4rem' }}>Email :</p>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ marginBottom: '0.4rem' }}>lgoh_argol@singnet.com.sg</p>
                                <p>sales_argol@singnet.com.sg</p>
                            </div>
                        </div>
                        <p style={{ marginBottom: '0.6rem' }}><b>Whatsapp :</b> (65) 9683 9120</p>
                        <p ><b>Website: </b>https://www.argol.com.sg</p>                    </Content>
                </Container>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <Header>
                    <p>Contact Us</p>
                </Header>
                <MobileContainer>
                    <MobileImage src={ContactUsPic} />
                    <MobileContent>
                        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem' }}>Argol & Company Pte Ltd</p>
                        <p style={{textAlign: 'center', marginBottom: '1.2rem'}}>60 Paya Lebar Road<br/>#07-54 Paya Lebar Square<br/>Singapore 409051</p>
                        <p style={{ fontSize: '16px', marginBottom: '0.3rem', marginTop: '0.6rem'}}>We welcome all enquires</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Wholesaling / Distributing</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Volume / Quantity Purchases</p>
                        <p style={{ marginBottom: '0.2rem' }}>* Private / Generic Branding</p>
                        <p style={{marginTop: '0.8rem', marginBottom: '0.4rem'}}>Kindly email / Whatsapp</p>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '0.6rem' }}>
                            <p style={{ marginRight: '0.4rem' }}>Email :</p>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p style={{ marginBottom: '0.2rem' }}>lgoh_argol@singnet.com.sg</p>
                                <p>sales_argol@singnet.com.sg</p>
                            </div>
                        </div>
                        <p style={{marginBottom: '0.4rem'}}><b>Whatsapp :</b> (65) 9683 9120</p>
                        <p ><b>Website: </b>https://www.argol.com.sg</p>
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

export default ContactUs
