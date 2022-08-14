import React, { Fragment} from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import Combinedlogos from '../../assets/combinedlogos.png';
import Sales from '../../assets/sales.png';

const HeaderImage = styled.img`
    width: 50%;
    display; flex;
    margin: auto;
`

const Container = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
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

const IconImage = styled.img`
    width: 15%;
    display; flex;
    margin: auto;
`

const ContactUs = () => {
    return (
        <Fragment>
            <Navbar/>
            <ImageBox>
                <HeaderImage src={Combinedlogos}/>
            </ImageBox>
            <PageHeader>We'd love to hear your questions.</PageHeader>
            <Container>
                <IndivBox>
                    <IconImage src={Sales}/>
                    <TextHeader>Talk to Sales</TextHeader>
                    <TextPara>sales_argol@singnet.com.sg / lgoh_argol@singnet.com.sg</TextPara>
                </IndivBox>
                <IndivBox>
                    <IconImage src={Sales}/>
                    <TextHeader>Customer Support</TextHeader>
                    <TextPara>Contact (+65) 96839120</TextPara>
                </IndivBox>    
            </Container>
        </Fragment>
    )
}

export default ContactUs
