import React, { Fragment} from 'react'
import Navbar from '../Navbar';
import styled from 'styled-components';
import Cover from '../../assets/test2.png'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    background-size:cover;
    padding-bottom: 30px;
`

const Image = styled.img`
width: 30%;
`

const LandingPage = () => {
    return (
         <Fragment>
              <Navbar/>
              <Container>
                    <Image src={Cover}/>
              </Container>
         </Fragment>
    )
}

export default LandingPage