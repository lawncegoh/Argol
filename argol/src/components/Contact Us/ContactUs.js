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
top: 12%;
right: 30%;
color: black;
background-color: white;
font-size: 16px;
padding: 50px 70px 50px 70px;
text-align: center;
`

const MobileContent = styled.div`
position: absolute;
top: 5%;
right: 5%;
color: black;
background-color: white;
font-size: 14px;
padding: 20px 20px 20px 20px;
text-align: center;
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
                        <p style={{ marginBottom: '1rem' }}>5 Yishun Industrial Street 1,<br/>#05-14 North Spring Bizhub,<br/>Singapore 768161</p>
                        <p style={{ marginBottom: '1rem' }}><b>Email :</b> lgoh_argol@singnet.com.sg<br/>sales_argol@singnet.com.sg</p>
                        <p style={{ marginBottom: '1rem' }}><b>Website: </b>https://www.argol.com.sg</p>
                        <p><b>Whatsapp :</b> (65) 9683 9120</p>
                    </Content>
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
                        <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.3rem' }}>Argol & Company Pte Ltd</p>
                        <p style={{ marginBottom: '1rem' }}>5 Yishun Industrial Street 1,<br/>#05-14 North Spring Bizhub,<br/>Singapore 768161</p>
                        <p style={{ marginBottom: '1rem' }}><b>Email :</b> lgoh_argol@singnet.com.sg<br/>sales_argol@singnet.com.sg</p>
                        <p style={{ marginBottom: '1rem' }}><b>Website: </b>https://www.argol.com.sg</p>
                        <p><b>Whatsapp :</b> (65) 9683 9120</p>
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
