import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

const brush = [
    {
        model: "PaintPad",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/PaintPad.jpg'),
        sizing: [
            {
                catNo: "97 06 117",
                size: '6" PaintPad Set',
                quantity: "24 sets",
                background_colour: "#ffffff"
            },
            {
                catNo: "97 06 107",
                size: '6" PaintPad Refill',
                quantity: "24 pcs",
                background_colour: "#ffff99"
            },
            {
                catNo: "97 08 117",
                size: '8" PaintPad Set',
                quantity: "20 sets",
                background_colour: "#ffffff"
            },
            {
                catNo: "97 08 107",
                size: '8" PaintPad Refill',
                quantity: "20 pcs",
                background_colour: "#ffff99"
            },
            {
                catNo: "97 10 117",
                size: '10" PaintPad Set',
                quantity: "20 sets",
                background_colour: "#ffffff"
            },
            {
                catNo: "97 10 107",
                size: '10" PaintPad Refill',
                quantity: "20 pcs",
                background_colour: "#ffff99"
            },
        ]
    },
]

const testData = [
    {
        model: "Cage Refill",
        LogoUrl: require('../../assets/logo1.png'),
        height: '110px',
        width: '140px',
        imageUrl: require('../../assets/products/Classic7.jpg'),
        description: [
            {
                value: "Thermo-fused/Thermo-bonded"
            },
            {
                value: "Fabrics. Various Polyester to Polyamide"
            },
            {
                value: "Pile length. From 4mm - 25mm"
            },
            {
                value: "Core diamter sizes. Range from 38mm - 45mm"
            },
            {
                value: "Cage frames available"
            }
        ],
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
        marginTop: '0rem',
    },
}


const LatestNewProducts = () => {

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
                    <p>Other Product</p>
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

                <Fragment>
                    {testData.map((data) => {
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
                                    </div>
                                </Content>
                            </Container>
                        )

                    })}
                </Fragment>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <Navbar />
                <MobileHeader>
                    <p>Product</p>
                </MobileHeader>
                {brush.map((data) => {
                    return (
                        <MobileContainer>
                            {/* Model name */}
                            <img src={data.LogoUrl} style={{ height: '70px', width: '90px', margin: 'auto' }} alt='Logo' />
                            <MobileModel>
                                <p style={{ fontSize: '22px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{data.range}<sub style={{ fontSize: '16px', fontStyle: 'italic', fontWeight: 'bold', paddingTop: '1.3rem', marginRight: '0.8rem' }}>{data.rangeSub}</sub> {data.model}</p>
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
                <Fragment>
                    {testData.map((data) => {
                        return (
                            <MobileContainer>
                                {/* Model name */}
                                <img src={data.LogoUrl} style={{ height: '70px', width: '90px', margin: 'auto' }} alt='Logo' />
                                <MobileModel>
                                    <p style={{ fontSize: '22px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>{data.range}<sub style={{ fontSize: '16px', fontStyle: 'italic', fontWeight: 'bold', paddingTop: '1.3rem', marginRight: '0.8rem' }}>{data.rangeSub}</sub> {data.model}</p>
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
                                    </div>
                                </MobileContent>
                            </MobileContainer>
                        )
                    })}
                </Fragment>
            </Fragment>
        )
    }


    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default LatestNewProducts