import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const paintbrush_Data = [
    {
        model: "DeLuxe Flat",
        imageUrl: require('../../assets/products/DeLuxeFlat.jpg'),
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
    {
        model: "Classic Flat Paint Brush",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints."
            },
            {
                value: "Good blend of pure bristles"
            },
            {
                value: "Ideal for emulsion / latex paint"
            },
            {
                value: "Plastic handle highly resistant to solvents and good grip"
            },
            {
                value: "Highly recommend for use in line cutting and trimming"
            }
        ],
        sizing: [
            {
                catNo: "67 015",
                size: '1 1/2"',
                quantity: "12 doz",
                background_color: "#fff"
            },
            {
                catNo: "67 020",
                size: '2"',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 025",
                size: '2 1/2"',
                quantity: "6 doz",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "DeLuxe Varnish Brush",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Varnish, Lacquer and Stain"
            },
            {
                value: "Special blend of synthetic bristles"
            },
            {
                value: "Highly minimised shredding of bristles"
            },
            {
                value: "Ergonomic wood handle for good and tireless grip"
            },
            {
                value: "Fine finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "67 400",
                size: '4cm',
                quantity: "12 doz",
                background_color: "#fff"
            },
            {
                catNo: "67 600",
                size: '6cm',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 800",
                size: '8cm',
                quantity: "12 doz",
                background_color: "#fff"
            },
            {
                catNo: "67 100",
                size: '10cm',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 120",
                size: '12cm',
                quantity: "6 doz",
                background_color: "#fff"
            },
            {
                catNo: "67 140",
                size: '14cm',
                quantity: "6 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 160",
                size: '16cm',
                quantity: "6 doz",
                background_color: "#fff"
            },
        ]
    },
    {
        model: "DeLuxe Pointed Brush",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Varnish, Lacquer and Stain"
            },
            {
                value: "Special blend of synthetic bristles"
            },
            {
                value: "Highly minimised shredding of bristles"
            },
            {
                value: "Ergonomic double-extrusion handle for comfort and tireless grip"
            },
            {
                value: "Fine finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "67 001",
                size: '#01',
                quantity: "12 doz",
                background_color: "#fff"
            },
            {
                catNo: "67 602",
                size: '#02',
                quantity: "12 doz",
                background_colour: "#ffff99"
            },
            {
                catNo: "67 003",
                size: '$03',
                quantity: "12 doz",
                background_color: "#fff"
            },
        ]
    },
    {
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Ultra fabric by Argol wear-resistant on semi and rough surfaces"
            },
            {
                value: "Good paint absorption and dispersion"
            },
            {
                value: "Bigger paint coverage area"
            },
            {
                value: "Minimised paint splatterying while rolling"
            },
            {
                value: "Ideal for exterior painting"
            }
        ],
        sizing: [
            {
                catNo: "16 654 00",
                size: '6" DeLuxe Jumbo Refill, Ultra',
                quantity: "200 pcs",
                background_color: '#fff'
            }
        ]
    },
    {
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Ultra fabric by Argol wear-resistant on semi and rough surfaces"
            },
            {
                value: "Good paint absorption and dispersion"
            },
            {
                value: "Bigger paint coverage area"
            },
            {
                value: "Minimised paint splatterying while rolling"
            },
            {
                value: "Ideal for exterior painting"
            }
        ],
        sizing: [
            {
                catNo: "20 654 00",
                size: '8" DeLuxe D8mm Refill, Ultra',
                quantity: "100 pcs",
                background_color: '#fff'
            }
        ]
    },
    {
        model: "DeLuxe Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Industrial & Epoxy/PU paints"
            },
            {
                value: "Applicable on smooth surface only"
            },
            {
                value: "Resistant to basic paint thinning solvents"
            },
            {
                value: "Smooth finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "10 170 00",
                size: '4" DeLuxe Mini Refill, Mogloss',
                quantity: "540 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "DeLuxe Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Industrial & Epoxy/PU paints"
            },
            {
                value: "Applicable on smooth surface only"
            },
            {
                value: "Resistant to basic paint thinning solvents"
            },
            {
                value: "Smooth finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "50 170 00",
                size: '2" DeLuxe Mini Refill, Mogloss',
                quantity: "1080 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "DeLuxe Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Industrial & Epoxy/PU paints"
            },
            {
                value: "Applicable on smooth surface only"
            },
            {
                value: "Resistant to basic paint thinning solvents"
            },
            {
                value: "Smooth finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "15 170 00",
                size: '6" DeLuxe Jumbo Refill, Mogloss',
                quantity: "200 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "DeLuxe Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for Industrial & Epoxy/PU paints"
            },
            {
                value: "Applicable on smooth surface only"
            },
            {
                value: "Resistant to basic paint thinning solvents"
            },
            {
                value: "Smooth finishing coat"
            }
        ],
        sizing: [
            {
                catNo: "18 170 00",
                size: '7" DeLuxe D8mm Refill, Mogloss',
                quantity: "100 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Distinguishable double Yellow-stripe by Argol"
            },
            {
                value: "Enhanced pure Acrylic"
            }
        ],
        sizing: [
            {
                catNo: "10 380 00",
                size: '4" Mini Refill, Double Yellow-stripe',
                quantity: "540 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Distinguishable double Yellow-stripe by Argol"
            },
            {
                value: "Enhanced pure Acrylic"
            }
        ],
        sizing: [
            {
                catNo: "50 380 00",
                size: '2" Mini Refill, Double Yellow-stripe',
                quantity: "1080 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Distinguishable Full Yellow-stripe by Argol"
            },
            {
                value: "Enhanced pure Acrylic"
            }
        ],
        sizing: [
            {
                catNo: "15 380 00",
                size: '6" Jumbo Refill, Full Yellow-stripe',
                quantity: "200 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Distinguishable double Yellow-stripe by Argol"
            },
            {
                value: "Enhanced pure Acrylic"
            }
        ],
        sizing: [
            {
                catNo: "18 380 00",
                size: '7" D8mm Refill, Double Yellow-stripe',
                quantity: "100 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refills",
        imageUrl: require('../../assets/paintbrush1.png'),
        sizing: [
            {
                catNo: "10 770 00",
                size: '4" Mini Refill, Flocked',
                quantity: "50 pcs",
                background_colour: "#fff"
            },
            {
                catNo: "15 770 00",
                size: '6" Jumbo Refill, Flocked',
                quantity: "50 pcs",
                background_colour: "#ffff99"
            },
        ]
    },
    {
        model: "DeLuxe Painting Tool",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "For use on Wall/Wallpaper as Stripper"
            },
            {
                value: "Handle extendable with Pole"
            },
            {
                value: "Blade replaceable"
            },
            {
                value: "Hexagon head nut screws for blade sturdiness"
            }
        ],
        sizing: [
            {
                catNo: "77 100 11",
                size: '4" HD Scraper c/w Spare Blade',
                quantity: "25 sets",
                background_colour: "#fff"
            },
        ]
    },
    {
        model: "Lafustreif",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints."
            },
            {
                value: "Ideal for interior painting."
            },
            {
                value: "Good paint absorption, holding & dispersion"
            },
            {
                value: "Minimised paint splaterring"
            },
            {
                value: "Lafustreif fabric by Furst enhances fine finishing coats."
            },
            {
                value: "With use on D6mm Roller frame"
            },
            {
                value: "Pack of 10"
            }
        ],
        sizing: [
            {
                catNo: "6 107 150",
                size: '6" Jumbo Refill, Lafustreif',
                quantity: "200 pcs",
                background_colour: "#fff"
            },
        ]
    },
    {
        model: "Elitakolor Range",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },  
            {
                value: "Broader diameter; 30mm"
            },
            {
                value: "Either side able to insert frame"
            },
            {
                value: 'More productive than standard 4" mini refill'
            },
            {
                value: "Good paint absorption, holding & dispersion."
            },
            {
                value: "Minimised paint splattering"
            },
            {
                value: "Elitakolor fabric by Furst enhances fine finishing coats"
            },
            {
                value: 'With use on 4" Mini Roller frame'
            },
            {
                value: "Pack of 10"
            }
        ],
        sizing: [
            {
                catNo: "45 103 11",
                size: '4 1/2" Mini Jumbo Refill, Elitakolor',
                quantity: "240 pcs",
                background_colour: "#fff"
            },
        ]
    },
    {
        model: "Elitakolor Range",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },  
            {
                value: "Good paint absorption, holding & dispersion."
            },
            {
                value: "Minimised paint splattering"
            },
            {
                value: "Elitakolor fabric by Furst enhances fine finishing coats"
            },
            {
                value: "Pack of 10"
            }
        ],
        sizing: [
            {
                catNo: "6 103 150",
                size: '6" Jumbo Refill, Elitakolor',
                quantity: "200 pcs",
                background_colour: "#fff"
            },
        ]
    },
    {
        model: "Elitakolor Range",
        imageUrl: require('../../assets/paintbrush1.png'),
        description: [
            {
                value: "Suitable for all paints"
            },
            {
                value: "Ideal for interior painting"
            }, 
            {
                value: "Good paint absorption, holding & dispersion."
            },
            {
                value: "Minimised paint splattering"
            },
            {
                value: "Elitakolor fabric by Furst enhances fine finishing coats"
            },
            {
                value: "With use on D8mm Roller frame"
            }
        ],
        sizing: [
            {
                catNo: "7 103 180",
                size: '7" D8mm Refill, Elitakolor',
                quantity: "100 pcs",
                background_colour: "#fff"
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
width: 35%;
margin: auto;
display: flex;
justify-content: center;
text-align: center;
margin-bottom: 6rem;
background-color: #e9851c;
height: 65px;
box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
-moz-box-shadow:    2px 2px 2px 2px #ccc;
-webkit-box-shadow: 2px 2px 2px 2px #ccc;
box-shadow:         2px 2px 2px 2px #ccc;
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
list-style-position: inside;
font-size: 18px;
`


const Image = styled.img`
width: 55%;
height: 70%;
background-image: red;
`


const Sizing = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
height: auto;
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
font-size: 20px;
`

const MobileSizing = styled.div`
display: flex;
justify-content: center;
text-align: center;
width: 100%;
margin-top: 2rem;
`

const MobileImage = styled.img`
width: 90%;
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
text-decoration: underline;
color: red;
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
letter-spacing: 5px;
color: #919191;
`

const styling = {
    right: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-around',
        marginTop: '1rem',
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
                <Header>
                    <p>Products</p>
                </Header>
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
                                    <div style={{marginBottom: '5%'}}>
                                    {data?.description?.map((description_data) => {
                                        return (
                                            <Description>
                                                <ul>
                                                    <li style={{height: '35px'}}>{description_data.value}</li>
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
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr style={{height: '30px'}}>
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
                    <p>Products</p>
                </MobileHeader>
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
                                    <div style={{marginTop: '1.5rem'}}>
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
                                                <tr style={{ backgroundColor: '#aaddef', height: '30px' }}>
                                                    <th style={{ border: '1px solid black' }}>Cat No.</th>
                                                    <th style={{ border: '1px solid black' }}>Size</th>
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
                                                </tr>
                                            </thead>
                                            {data?.sizing?.map((size) => {
                                                return (
                                                    <tbody style={{ backgroundColor: size.background_colour }}>
                                                        <tr style={{height: '25px'}}>
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

export default Catalogue