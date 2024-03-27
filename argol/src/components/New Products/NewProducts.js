import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

const brush = [
    {
        model: "JobMaster Flat Paint Brush",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/JobMasterPaintBrush.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Good blend of bristles"
            },
            {
                value: "Plastic handle highly resistant to solvent, & good grip"
            },
            {
                value: "Highly recommended for use in line cutting and trimming"
            },
        ],
        sizing: [
            {
                catNo: "66 113",
                size: '\u00BD"',
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 125",
                size: '1"',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 138",
                size: '1\u00BD"',
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 150",
                size: '2"',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 163",
                size: '2\u00BD"',
                quantity: "6 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 175",
                size: '3"',
                quantity: "6 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 4",
                size: '4"',
                quantity: "6 doz",
                background_colour: "#ffffff"
            },
        ]
    },
    {
        model: "JobMaster Range Refills",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/JobMaster2MiniRefill.png'),
        description: [
            {
                value: "Enhanced Acrylic fabric"
            },
        ],
        sizing: [
            {
                catNo: "50 170 00",
                size: '2" Mini Refill, Blue Green stripe',
                quantity: "1080 pcs",
                background_colour: "#ffffff"
            },
        ]
    },
    {
        model: "JobMaster Range Refills",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/JobMaster4MiniRefill.png'),
        description: [
            {
                value: "Enhanced Acrylic fabric"
            },
        ],
        sizing: [
            {
                catNo: "10 170 00",
                size: '4" Mini Refill, Blue Green stripe',
                quantity: "540 pcs",
                background_colour: "#ffffff"
            },
        ]
    },
    {
        model: "JobMaster Range Refills",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/JobMaster6Refill.png'),
        description: [
            {
                value: "Enhanced Acrylic fabric"
            },
        ],
        sizing: [
            {
                catNo: "15 180 00",
                size: '6" Refill, Blue Green stripe',
                quantity: "200 pcs",
                background_colour: "#ffffff"
            },
        ]
    },
    {
        model: "JobMaster Range Refills",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/JobMaster7Refill.png'),
        description: [
            {
                value: "Enhanced Acrylic fabric"
            },
        ],
        sizing: [
            {
                catNo: "18 180 00",
                size: '7" D8mm Refill, Blue Green stripe',
                quantity: "100 pcs",
                background_colour: "#ffffff"
            },
        ]
    },
    {
        model: "HandyMan Flat Paint Brush",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/HandyManPaintBrush.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Good blend of bristles"
            },
            {
                value: "Plastic handle highly resistant to solvent, & good grip"
            },
            {
                value: "Highly recommended for use in line cutting and trimming"
            },
        ],
        sizing: [
            {
                catNo: "66 005",
                size: '\u00BD"',
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 010",
                size: '1"',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 015",
                size: '1\u00BD"',
                quantity: "12 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 020",
                size: '2"',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 025",
                size: '2\u00BD"',
                quantity: "6 doz",
                background_colour: "#ffffff"
            },
            {
                catNo: "66 030",
                size: '3"',
                quantity: "6 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "66 040",
                size: '4"',
                quantity: "6 doz",
                background_colour: "#ffffff"
            },
        ]
    },
]



const Container = styled.div`
width: 80%;
height: 100%;
margin: 4rem auto 15rem;
display: flex;
flex-direction: column;
`

const Model = styled.div`
width: 40%;
margin: auto;
display: flex;
justify-content: center;
text-align: center;
margin-bottom: 2rem;
background-color: #e9851c;
height: 80px;
box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
-moz-box-shadow:    2px 2px 2px 2px #ccc;
-webkit-box-shadow: 2px 2px 2px 2px #ccc;
box-shadow:         2px 2px 2px 2px #ccc;
font-weight: bold;
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
width: 105%;
letter-spacing: 1px;
list-style-position: outside;
margin-left: 1.2rem;
font-size: 18px;
font-weight: bold;
`


const Image = styled.img`
width: 45%;
height: 70%;
`


const Header = styled.div`
width: 80%;
margin: 0rem auto 3rem;
height: 70px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 48px;
color: red;
`

const Sizing = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 110%;
height: auto;
font-weight: bold;
`

const MobileContainer = styled.div`
width: 90%;
height: 100%;
margin: 0rem auto 6rem;
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
text-align: center;
font-weight: bold;
`

const MobileContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
margin: auto;
align-items: center;
`

const MobileDescription = styled.div`
display: flex;
flex-direction: column;
width: 90%;
letter-spacing: 1px;
justify-content: center;
margin: auto;
list-style-position: outside;
margin-left: 1.2rem;
margin-bottom: 3px;
font-size: 16px;
font-weight: bold;
`

const MobileSizing = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
margin-top: 2rem;
font-weight: bold;
`

const MobileImage = styled.img`
width: 90%;
height: 70%;
`

const MobileHeader = styled.div`
width: 80%;
margin: 0rem auto 2rem;
height: 60px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 48px;
color: red;
`

const styling = {
    right: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-around',
        marginTop: '1rem',
    },
}


const NewProducts = () => {

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
                <Header>
                    <p style={{fontWeight: 'bold', color: '#1764c5', fontSize: '52px'}}>JobMaster Range</p>
                </Header>
                {brush.map((data) => {
                    return (
                        <Container>
                            {/* Model name */}
                            <img src={data.LogoUrl} style={{ height: data.height, width: data.width, alignItems: 'center', margin: 'auto' }} alt='Logo' />
                            <Model>
                                <p style={{ fontSize: '32px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{data.model}</p>
                            </Model>
                            {/* Main content (image and description) */}
                            <Content>
                                {/* Image */}
                                <Image src={data.imageUrl} />
                                {/* Product description */}
                                <div style={styling.right}>
                                    <div style={{ marginBottom: '5%' }}>
                                        {data?.description?.map((description_data) => {
                                            return (
                                                <Description>
                                                    <ul>
                                                        <li style={{ height: '45px' }}>{description_data.value}</li>
                                                    </ul>
                                                </Description>
                                            )
                                        })}
                                    </div>
                                    <Sizing>
                                        <table style={{ width: '100%', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK' }}>
                                            <thead>
                                                <tr style={{ backgroundColor: '#aaddef', height: '25px' }}>
                                                    <th style={{ border: '1px solid black' }}>Cat No.</th>
                                                    <th style={{ border: '1px solid black' }}>Size</th>
                                                    <th style={{ border: '1px solid black' }}>Quantity / Carton</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr style={{ height: '30px' }}>
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
                <MobileHeader>
                    <p style={{fontWeight: 'bold', color: '#1764c5'}}>JobMaster Range</p>
                </MobileHeader>
                {brush.map((data) => {
                    return (
                        <MobileContainer>
                            {/* Model name */}
                            <img src={data.LogoUrl} style={{ height: '70px', width: '90px', margin: 'auto' }} alt='Logo' />
                            <MobileModel>
                                <p style={{ fontSize: '22px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{data.range}<sub style={{ fontSize: '16px', fontStyle: 'italic', fontWeight: 'bold', paddingTop: '1.3rem', marginRight: '0.8rem'}}>{data.rangeSub}</sub> {data.model}</p>
                            </MobileModel>
                            {/* Main content (image and description) */}
                            <MobileContent>
                                {/* Image */}
                                <MobileImage src={data.imageUrl} />
                                {/* Product description */}
                                <div style={styling.mobileRight}>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        {data?.description?.map((description_data) => {
                                            return (
                                                <MobileDescription>
                                                    <ul>
                                                        <li>{description_data.value}</li>
                                                    </ul>
                                                </MobileDescription>
                                            )
                                        })}
                                    </div>
                                    <MobileSizing>
                                        <table style={{ width: '100%', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK' }}>
                                            <thead>
                                                <tr style={{ backgroundColor: '#aaddef', height: '25px' }}>
                                                    <th style={{ border: '1px solid black' }}>Cat No.</th>
                                                    <th style={{ border: '1px solid black' }}>Size</th>
                                                    <th style={{ border: '1px solid black' }}>Quantity / Carton</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr style={{ height: '25px' }}>
                                                            <td style={{ border: '1px solid black' }}>{size.catNo}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.size}</td>
                                                            <td style={{ border: '1px solid black' }}>{size.quantity}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })}
                                        </table>
                                    </MobileSizing>
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

export default NewProducts