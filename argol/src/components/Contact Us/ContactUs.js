import React, { Fragment} from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import Combinedlogos from '../../assets/combinedlogos.png';
import ContactUsPic from '../../assets/contactus.jpg';

const HeaderImage = styled.img`
    height: auto;
    width: 100%;
    max-width: 600px;
    display; flex;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    background-size:cover;
    text-align: center;
`

const InnerContainer = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    margin: auto;
    background-size:cover;
`

const IndivBox = styled.div`
    width: 100%;
    height: 300px;
    background: #D4F1F4;
    display: flex;
    flex-direction: column;
    margin: 0rem 1rem 5rem;
    align-items: center;
    -moz-box-shadow:    3px 3px 5px 5px #ccc;
    -webkit-box-shadow: 3px 3px 5px 5px #ccc;
    box-shadow:         3px 3px 5px 5px #ccc;
`
const ImageBox = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left:35%;
    margin-right:35%;
    margin-bottom:10%;
    gap: 0rem;
`

const PageHeader = styled.h3`
    color: black;
    text-align: center;
    margin: auto;
    padding-bottom: 20px;
`

const TextHeader = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    height: 30%;
    font-weight: bold;
`

const TextPara = styled.div`
    color: grey;
    height: 20%;
    padding: 0rem 0rem 0rem;
    text-align: center;
    font-size: 15px;
`

const InfoContainer = styled.div`
    position:absolute;
    top: //As per need;
    overflow: hidden;
`

const SalesWords = styled.div`
    float: left;
    margin-top: 70%;
    margin-left: 50%;
    font-size: 1.5vw;
    background: yellow;
    -moz-box-shadow:    3px 3px 5px 5px #ccc;
    -webkit-box-shadow: 3px 3px 5px 5px #ccc;
    box-shadow:         3px 3px 5px 5px #ccc;
`

const ContactUs = () => {
    return (
        <Fragment>
            <Navbar/>
            <Container>
                <HeaderImage src={ContactUsPic}/>
                <InfoContainer>
                    <SalesWords>
                        <h4>Talk to Sales </h4>
                        <p>sales_argol@singnet.com.sg</p>
                        <p>lgoh_argol@singnet.com.sg</p>
                        <br/>
                        <h4>Customer Support</h4>
                        <p>(+65) 96839120</p>
                    </SalesWords>
                </InfoContainer>
            </Container>
            {/* <Container>
                <InnerContainer>
                    <PageHeader>We'd love to hear your questions.</PageHeader>
                    <IndivBox>
                        <IconImage src={Combinedlogos}/>
                        <TextHeader>Talk to Sales</TextHeader>
                        <TextPara>sales_argol@singnet.com.sg / lgoh_argol@singnet.com.sg</TextPara>
                    </IndivBox>
                    <IndivBox>
                        <IconImage src={Combinedlogos}/>
                        <TextHeader>Customer Support</TextHeader>
                        <TextPara>Contact (+65) 96839120</TextPara>
                    </IndivBox>   
                </InnerContainer> 
            </Container> */}
        </Fragment>
    )
}

export default ContactUs
