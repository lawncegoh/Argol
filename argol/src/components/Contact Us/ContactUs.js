import React, { Fragment} from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import Combinedlogos from '../../assets/combinedlogos.png';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    padding: 0rem 0rem 0rem;
`
const IndivBox = styled.div`
    width: 100%;
    background: #D4F1F4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10%;
    padding: 20px;
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

const PageHeader = styled.h2`
    color: black;
    padding: 0rem 0rem 5rem;
    text-align: center;
`

const TextHeader = styled.h4`
    color: black;
    padding: 0rem 0rem 5rem;
    text-align: center;
`

const TextPara = styled.h4`
    color: grey;
    padding: 0rem 0rem 0rem;
    text-align: center;
`

const ContactUs = () => {
    return (
        <Fragment>
            <Navbar/>
            <ImageBox>
                <img src={Combinedlogos}/>
            </ImageBox>
            <PageHeader>We'd love to hear your questions.</PageHeader>
            <Container>
                <IndivBox>
                    <TextHeader>Talk to Sales</TextHeader>
                    <TextPara>sales_argol@singnet.com.sg / lgoh_argol@singnet.com.sg</TextPara>
                </IndivBox>
                <IndivBox>
                    <TextHeader>Contact Customer Support</TextHeader>
                    <TextPara>(+65) 96839120</TextPara>
                </IndivBox>    
            </Container>
        </Fragment>
    )
}

export default ContactUs
