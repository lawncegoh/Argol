import React, { Fragment} from 'react'
import Navbar from '../Navbar';
import styled from 'styled-components';
import Cover from '../../assets/cover.jpg'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    background-size:cover;
    padding-bottom: 30px;
`

const LandingPage = () => {
    return (
         <Fragment>
              <Navbar/>
              <Container>
                    <img src={Cover}/>
              </Container>
         </Fragment>
    )
}

export default LandingPage