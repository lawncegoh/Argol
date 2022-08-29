import React, { Fragment} from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import ContactUsPic from '../../assets/contactus.jpg';


const Container = styled.div`
width: 90%;
height: 40%;
margin: auto;
position: relative;
`

const Content = styled.div`
position: absolute;
top: 12%;
right: 30%;
color: black;
background-color: #ffefd4;
font-size: 14px;
padding: 25px 20px 25px 20px;
text-align: center;
`

const Image = styled.img`
width: 40%;
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
    return (
        <Fragment>
            <Navbar/>
            <Header>
                <p>About Us</p>
            </Header>
            <Container>
                <Image src={ContactUsPic}/>
                <Content>
                    <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '1rem'}}>Argol & Company Pte Ltd</p>
                    <p style={{marginBottom: '1rem'}}>5 Yishun Industrial street 1, #05-14 North Spring Bizhub, Singapore 768161</p>
                    <p style={{marginBottom: '1rem'}}><b>Email :</b> sales_argol@singnet.com.sg / lgoh_argol@singnet.com.sg</p>
                    <p><b>Whatsapp :</b> (65) 9683 9120</p>
                </Content>
            </Container>
        </Fragment>
    )
}

export default ContactUs
