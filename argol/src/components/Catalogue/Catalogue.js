import React, { Image, Fragment} from 'react';
import Navbar from '../Navbar';
import styled from 'styled-components';
import Paintbrush1 from '../../assets/paintbrush1.png';

const ProductHeader = styled.h2`
    color: black;
    size: 10px;
`

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    padding: 3rem 0rem 3rem;
`

const ImageBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    margin: 0rem 0rem 0rem;
`

const Catalogue = () => {
    return (
    <Fragment>
        <Navbar/>
        <Container>
            <ProductHeader>
                DeLuxe Flat Paint Brush
            </ProductHeader>
        </Container>
        <Container>
            <ImageBox>
                <img src={Paintbrush1}/>
            </ImageBox>
            <ImageBox>
                <ul>
                    <li>
                        Suitable for all paints.
                    </li>
                    <li>
                        Ideal for enamel paint
                    </li>
                    <li>
                        Wood handle
                    </li>
                    <li>
                        Good blend of pure bristles
                    </li>
                </ul>
            </ImageBox>
        </Container>
    </Fragment>
    )
}

export default Catalogue