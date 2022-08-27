import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import './Catalogue.css'

const paintbrush_Data = [
    {
        model: "DeLuxe Flat",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Ideal for enamel paint"
            },
            {
                value: "Wood Handle"
            },
            {
                value: "Good blend of pure bristles"
            }
        ],
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
display: flex;
justify-content: center;
margin-bottom: 4rem;
background-color: #e9851c;
height: 60px;
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
letter-spacing: 1px;
justify-content: center;
margin: auto;
list-style-position: inside;
margin-bottom: 3px;
font-size: 18px;
`

const Image = styled.img`
width: 55%;
height: 70%;
`


const Sizing = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
height: 180px;
margin-top: 2rem;
`

const MobileContainer = styled.div`
width: 90%;
height: 100%;
margin: 0rem auto 10rem;
display: flex;
flex-direction: column;
`

const MobileModel = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 2rem;
background-color: #e9851c;
height: 60px;
`

const MobileContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
margin: auto;
`

const MobileDescription = styled.div`
display: flex;
flex-direction: column;
width: 100%;
letter-spacing: 1px;
justify-content: center;
margin: auto;
list-style-position: inside;
margin-bottom: 3px;
font-size: 18px;
`

const MobileImage = styled.img`
width: 90%;
height: 70%;
`

const styling = {
    right: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '100%',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    mobileRight: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
}


const Catalogue = () => {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1100
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const displayDesktop = () => {
        return (
            <Fragment>
                <Navbar />
                {paintbrush_Data.map((data) => {
                    return (
                        <Container>
                            {/* Model name */}
                            <Model>
                                <p style={{ fontSize: '32px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{data.model}</p>
                            </Model>
                            {/* Main content (image and description) */}
                            <Content>
                                {/* Image */}
                                <Image src={data.imageUrl} />
                                {/* Product description */}
                                <div style={styling.right}>
                                    {data?.description?.map((description_data) => {
                                        return (
                                            <Description>
                                                <ul>
                                                    <li>{description_data.value}</li>
                                                </ul>
                                            </Description>
                                        )
                                    })}
                                    <Sizing>
                                        <table style={{ width: '100%', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK' }}>
                                            <thead>
                                                <tr style={{ backgroundColor: '#aaddef', height: '25px' }}>
                                                    <th style={{ border: '1px solid black' }}>Cat No.</th>
                                                    <th style={{ border: '1px solid black' }}>Size</th>
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr>
                                                            <td style={{ border: '1px solid black' }}>{size.catNo}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.size}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.quantity}</td>
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


    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                {paintbrush_Data.map((data) => {
                    return (
                        <MobileContainer>
                            {/* Model name */}
                            <MobileModel>
                                <p style={{ fontSize: '32px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{data.model}</p>
                            </MobileModel>
                            {/* Main content (image and description) */}
                            <MobileContent>
                                {/* Image */}
                                <MobileImage src={data.imageUrl} />
                                {/* Product description */}
                                <div style={styling.mobileRight}>
                                    {data?.description?.map((description_data) => {
                                        return (
                                            <MobileDescription>
                                                <ul>
                                                    <li>{description_data.value}</li>
                                                </ul>
                                            </MobileDescription>
                                        )
                                    })}
                                    <Sizing>
                                        <table style={{ width: '100%', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK' }}>
                                            <thead>
                                                <tr style={{ backgroundColor: '#aaddef', height: '25px' }}>
                                                    <th style={{ border: '1px solid black' }}>Cat No.</th>
                                                    <th style={{ border: '1px solid black' }}>Size</th>
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr>
                                                            <td style={{ border: '1px solid black' }}>{size.catNo}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.size}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.quantity}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    </Sizing>
                                </div>
                            </MobileContent>
                        </MobileContainer>
                    )
                })}
            </Fragment>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default Catalogue