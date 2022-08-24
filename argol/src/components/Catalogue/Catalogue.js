import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import './Catalogue.css'

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
        sizing: [
            {
                catNo: "67 113",
                size: "1/2",
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "67 125",
                size: "1",
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 138",
                size: "1 1/2",
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "67 150",
                size: "2",
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 163",
                size: "2 1/2",
                quantity: "6 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "67 175",
                size: "3",
                quantity: "6 doz",
                background_colour: "#ffff99"
            },
        ]
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
    // {
    //     model: "DeLuxe Range Refill",
    //     imageUrl: require('../../assets/paintbrush1.png'),
    //     description: {
    //         first: "Suitable for all paints",
    //         second: "Ultra fabric by Argol wear-resistant on semi and rough surfaces",
    //         third: "Good paint absorption and dispersion",
    //         fourth: "Bigger paint coverage area",
    //         fifth: "Minimised paint splattering while rolling",
    //         sixth: "Ideal for exterior painting"    
    //     },

]

const Container = styled.div`
width: 80%;
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
width: 100%;
height: auto;
padding: 10px 20px;
background-color: #edeef0;
border-radius: 10px;
letter-spacing: 1px;
justify-content: center;
margin-bottom: 2.5rem;
margin-top: 1.5rem;
`

const Image = styled.img`
width: 55%;
height: 70%;
`

const Category = styled.p`
font-size: 72px;
letter-spacing: 10px;
color: #bdbdbd;
text-align: center;
margin-bottom: 4rem;
`

const Sizing = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
height: 180px;
`

const styling = {
    right: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '100%'
    },
    tableColor: {
        
    }
}


const Catalogue = () => {
    return (
        <Fragment>
            <Navbar />
            <Category>Brushes</Category>
            {paintbrush_Data.map((data) => {
                return (
                    <Container>
                        {/* Model name */}
                        <Model>
                            <p style={{ fontSize: '26px', letterSpacing: '1.5px' }}>{data.model}</p>
                        </Model>
                        {/* Main content (image and description) */}
                        <Content>
                            {/* Image */}
                            <Image src={data.imageUrl} />
                            {/* Product description */}
                            <div style={styling.right}>
                                <Description>
                                    <p>{data?.description?.first}</p>
                                    <p>{data?.description?.second}</p>
                                    <p>{data?.description?.third}</p>
                                    <p>{data?.description?.fourth}</p>
                                    <p>{data?.description?.fifth}</p>
                                </Description>
                                <Sizing>
                                    <table style={{ width: '100%', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', border: '2px solid black'}}>
                                        <thead>
                                            <tr>
                                                <th >Cat No.</th>
                                                <th>Size</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        {data?.sizing?.map((size) => {
                                            return (
                                                <tbody style={{backgroundColor: size.background_colour}}>
                                                    <tr>
                                                        <td>{size.catNo}</td>
                                                        <td>{size.size}</td>
                                                        <td>{size.quantity}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })}
                                    </table>
                                </Sizing>
                            </div>
                        </Content>
                    </Container>
                )
            })}
        </Fragment>
    )
}

export default Catalogue