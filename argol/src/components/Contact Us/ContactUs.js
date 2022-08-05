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
const IndivBoxes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10%;
    padding: 0rem 0rem 0rem;
    border-style: double;
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

const ContactUs = () => {
    return (
        <Fragment>
            <Navbar/>
            <ImageBox>
                <img src={Combinedlogos}/>
            </ImageBox>
            <Container>
                <h2>We'd love to hear your questions.</h2>
            </Container>
            <Container>
                <IndivBoxes>
                    <h4>Talk to Sales</h4>
                    <p>sales_argol@singnet.com.sg / lgoh_argol@singnet.com.sg</p>
                </IndivBoxes>
                <IndivBoxes>
                    <h4>Contact Customer Support</h4>
                    <p>(+65) 96839120</p>
                </IndivBoxes>    
            </Container>
        </Fragment>
    )
}

export default ContactUs
