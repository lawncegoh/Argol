import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import './Catalogue.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaintBrush
} from '@fortawesome/free-solid-svg-icons'

const paintbrush_Data = [
    {
        model: "DeLuxe Flat",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: {
            first: "Suitable for all paints",
            second: "Ideal for enamel paint",
            third: "Wood handle",
            fourth: "Good blend of pure bristles"
        },
    },
    // {
    //     model: "Classic Flat Paint Brush",
    //     imageUrl: require('../../assets/paintbrush1.png'),
    //     description: {
    //         first: "Suitable for all paints",
    //         second: "Good blend of pure bristles",
    //         third: "Ideal for emulsion / latex paint",
    //         fourth: "Plastic handle highly resistant to solvents and good grip",
    //         fifth: "Highly recommend for use in line cutting and trimming"
    //     },
    // },
    // {
    //     model: "DeLuxe Varnish Brush",
    //     imageUrl: require('../../assets/paintbrush1.png'),
    //     description: {
    //         first: "Suitable for Varnish, Lacquer and Stain",
    //         second: "Special blend of synthetic bristles",
    //         third: "Highly minimised shredding of bristles",
    //         fourth: "Ergonomic wood handle for good and tireless grip",
    //         fifth: "Fine finishing coat"
    //     },
    // },
    // {
    //     model: "DeLuxe Pointed Brush",
    //     imageUrl: require('../../assets/paintbrush1.png'),
    //     description: {
    //         first: "Suitable for Varnish, Lacquer and Stain",
    //         second: "Special blend of synthetic bristles",
    //         third: "Highly minimised shredding of bristles",
    //         fourth: "Ergonomic double-extrusion handle for comfort and tireless grip",
    //         fifth: "Fine finishing coat"
    //     },
    // },
]

const Container = styled.div`
width: 70%;
height: 100%;
margin: 0rem auto 10rem;
display: flex;
flex-direction: column;
`

const Model = styled.div`
width: 100%;
text-align: left;
margin-bottom: 4rem;
`

const Content = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin: auto;
`

const Description = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 100%;
padding: 10px 20px;
background-color: #edeef0;
border-radius: 10px;
letter-spacing: 1px;
justify-content: center;
margin-right: 10%;
`

const Image = styled.img`
width: 55%;
height: 60%;
`

const Category = styled.p`
font-size: 72px;
letter-spacing: 10px;
color: #bdbdbd;
text-align: center;
margin-bottom: 4rem;
`


// const Display = styled.div`
// width: 90%;
// height: 100vh;
// margin: auto;
// position: relative;
// `

// const Tagline = styled.div`
// display: flex;
// flex-direction: column;
// position: absolute;
// bottom: 10%;
// right: 6%;
// text-align: flex-start;
// `

// const Background = styled.img`
// width: 100%;
// height: 100vh;
// `

const Catalogue = () => {
    return (
        <Fragment>
            {/* <Display>

                <Background src={require('../../assets/background.jpg')}/>

                <Tagline>
                    <p style={{letterSpacing: '2px', fontSize: '20px'}}>Before You Start,<br/>Think Of The Finish</p>
                </Tagline>
            </Display> */}
            <Category>Brushes</Category>
            {paintbrush_Data.map((data) => {
                return (
                    <Container>
                        {/* Landing page for the Catalogue */}

                        {/* Model name */}
                        <Model>
                            <p style={{fontSize: '26px', letterSpacing: '1.5px'}}>{data.model}</p>
                        </Model>
                        {/* Main content (image and description) */}
                        <Content>
                            {/* Image */}
                            <Image src={data.imageUrl} />
                            {/* Product description */}
                            <Description>
                                <p>{data?.description?.first}</p>
                                <p>{data?.description?.second}</p>
                                <p>{data?.description?.third}</p>
                                <p>{data?.description?.fourth}</p>
                                <p>{data?.description?.fifth}</p>
                            </Description>
                        </Content>
                    </Container>
                )
            })}
        </Fragment>
    )
}

export default Catalogue