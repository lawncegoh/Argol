import React from 'react'
import styled from 'styled-components'

import Logo1 from '../../assets/logo1.png'

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 5rem;
`

const Content = styled.p`
font-size: 32px;
font-weight: bold;
text-align: center;
`

const Construction = () => {
    return (
        <Container>
            <img style={{width: '10%', height: '18%'}} src={Logo1} alt='Argol'/>
            <Content>Under Construction</Content>
        </Container>
    )
}

export default Construction