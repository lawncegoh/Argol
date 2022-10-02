import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Logo from '../../assets/logo1.png'

const paintbrush_Data = [
    {
        model: "DeLuxe Flat Paint Brush",
        imageUrl: require('../../assets/products/DeLuxeFlat.png'),
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
        imageUrl: require('../../assets/products/ClassicFlat.png'),
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
        imageUrl: require('../../assets/products/DeLuxeVarnish.png'),
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
        imageUrl: require('../../assets/products/DeLuxePointed.png'),
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
        imageUrl: require('../../assets/products/UltraRefill6.png'),
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
        imageUrl: require('../../assets/products/UltraRefill8.png'),
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
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Mogloss4.png'),
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
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Mogloss2.png'),
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
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Mogloss6.png'),
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
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Mogloss7.png'),
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
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Gold6.png'),
        description: [
            {
                value: "Superb paint absorption and good dispersion"
            },
            {
                value: "Bigger paint coverage area."
            },
            {
                value: "Uniform paint coat on surface."
            },
            {
                value: "Suitable for all paints."
            },
            {
                value: "Splatter-free during rolling."
            },
            {
                value: "Ideal for gloss & high pigmented paints"
            },
            {
                value: "For use on smooth & semi rough surfaces."
            },
            {
                value: "Gold fabric by Argol"
            }
        ],
        sizing: [
            {
                catNo: "16 178 00",
                size: '6" DeLuxe Jumbo Refill, Gold',
                quantity: "200 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "DeLuxe Range Refill",
        imageUrl: require('../../assets/products/Gold8.png'),
        description: [
            {
                value: "Superb paint absorption and good dispersion"
            },
            {
                value: "Bigger paint coverage area."
            },
            {
                value: "Uniform paint coat on surface."
            },
            {
                value: "Suitable for all paints."
            },
            {
                value: "Splatter-free during rolling."
            },
            {
                value: "Ideal for gloss & high pigmented paints"
            },
            {
                value: "For use on smooth & semi rough surfaces."
            },
            {
                value: "Gold fabric by Argol"
            }
        ],
        sizing: [
            {
                catNo: "20 178 00",
                size: '8" DeLuxe D8mm Refill, Gold',
                quantity: "100 pcs",
                background_colour: "#fff"
            }
        ]
    },
    {
        model: "Classic Range Refill",
        imageUrl: require('../../assets/products/DoubleYellowStripe4.png'),
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
        model: "Classic Range Refill",
        imageUrl: require('../../assets/products/DoubleYellowStripe2.png'),
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
        model: "Classic Range Refill",
        imageUrl: require('../../assets/products/FullYellowStripe6.png'),
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
        model: "Classic Range Refill",
        imageUrl: require('../../assets/products/DoubleYellowStripe7.png'),
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
        model: "Classic Range Refill",
        imageUrl: require('../../assets/products/Flocked.png'),
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
        imageUrl: require('../../assets/products/DeLuxePaintingTool.png'),
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
        imageUrl: require('../../assets/products/Lafustreif.png'),
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
        imageUrl: require('../../assets/products/Elitakolor4.5.png'),
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
        imageUrl: require('../../assets/products/Elitakolor6.png'),
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
        imageUrl: require('../../assets/products/Elitakolor7.png'),
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
    {
        model: "Contractor grade Spiker/Self-Leveling Roller",
        imageUrl: require('../../assets/products/SpikeRoller.png'),
        description: [
            {
                value: "For use on self-levelling paints & materials."
            },
            {
                value: "Spike to burst bubbles in Epoxy/PU paints, and others"
            },
            {
                value: "Spike resistant to solvents."
            },
            {
                value: "Able to use on 10mm thickness coat."
            },
        ],
        sizing: [
            {
                catNo: "76 107 05",
                size: '5" Spike Roller',
                quantity: "10 pcs",
                background_colour: "#fff"
            },
            {
                catNo: "76 107 10",
                size: '10" Spike Roller',
                quantity: "10 pcs",
                background_colour: "#ffff99"
            },
            {
                catNo: "76 107 15",
                size: '15" Spike Roller',
                quantity: "10 pcs",
                background_colour: "#fff"
            },
        ]
    },
    {
        model: "Contractor grade Spiker/Self-Leveling Roller",
        imageUrl: require('../../assets/products/DoubleArmFrame.png'),
        description: [
            {
                value: "Aluminum double-arm frame for centralised pressure."
            },
            {
                value: "Fits extension pole."
            },
            {
                value: "For use on self-levelling paints & materials."
            },
            {
                value: "Spike to burst bubbles in Epoxy/PU paints, and others"
            },
            {
                value: "Spike resistant to solvents."
            },
            {
                value: "Able to use on 10mm thickness coat."
            },
        ],
        sizing: [
            {
                catNo: "76 107 18",
                size: '18" Spiker Roller c/w Double-Arm Aluminum Frame',
                quantity: "2 pcs",
                background_colour: "#ffff99"
            },
            {
                catNo: "76 107 24",
                size: '24" Spiker Roller c/w Double-Arm Aluminum Frame',
                quantity: "2 pcs",
                background_colour: "#fff"
            },
            {
                catNo: "76 107 36",
                size: '36" Spiker Roller c/w Double-Arm Aluminum Frame',
                quantity: "2 pcs",
                background_colour: "#ffff99"
            },
        ]
    },

]

const AllMasterRollers = [
    {
        imageUrl: require('../../assets/products/Frame2.png'),
        catNo: "32 206 12",
        size: '2" Frame, 12" Length',
        quantity: "100 pcs"
    },
    {
        imageUrl: require('../../assets/products/Frame4.png'),
        catNo: "32 406 12",
        size: '4" Frame, 12" Length',
        quantity: "100 pcs"
    },
    {
        imageUrl: require('../../assets/products/Frame41824Length.png'),
        catNo: "32 406 18 / 32 406 24",
        size: '4" Frame, 18" / 24" Length',
        quantity: "100 pcs"
    },
    {
        imageUrl: require('../../assets/products/Frame6.png'),
        catNo: "32 606 18",
        size: '6" Frame, 18" Length',
        quantity: "100 pcs"
    },
    {
        imageUrl: require('../../assets/products/Frame63260620.png'),
        catNo: "32 606 20",
        size: '6" Frame',
        quantity: "100 pcs"
    },
    {
        imageUrl: require('../../assets/products/Frame7&8.png'),
        catNo: "32 708 01",
        size: 'D8mm Frame for 7" & 8" Refills',
        quantity: "50 pcs"
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
margin-bottom: 6rem;
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
`


const Image = styled.img`
width: 45%;
height: 70%;
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
    mobileRight: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        marginTop: '1rem'
    },
    AllMasterRollers: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        textAlign: 'center',
        marginBottom: '5rem'
    },
    MobileAllMasterRollers: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        textAlign: 'center'
    }
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
                                <img src={Logo} style={{ height: '75px', width: '100px', marginRight: '0.5rem' }} alt='Logo' />
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
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
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
                <Model>
                    <p style={{ fontSize: '32px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>AllMaster Paint Roller Frames</p>
                </Model>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '80%', margin: '0rem auto' }}>
                    {AllMasterRollers.map((item) => {
                        return (
                            <Fragment>
                                <div style={styling.AllMasterRollers}>
                                    <img style={{ width: '80%', margin: 'auto', marginBottom: '3rem' }} src={item.imageUrl} alt='All Master Rollers' />
                                    <table style={{ borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK', width: '60%', margin: 'auto' }}>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Cat. No.</th>
                                            <td style={{ border: '1px solid black' }}>{item.catNo}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Description</th>
                                            <td style={{ border: '1px solid black' }}>{item.size}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Qty/Carton</th>
                                            <td style={{ border: '1px solid black' }}>{item.quantity}</td>
                                        </tr>
                                    </table>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
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
                                <img src={Logo} style={{height: '100%', width: '80px' }} alt='Logo' />
                                <p style={{ fontSize: '22px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{data.model}</p>
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
                                                    <th style={{ border: '1px solid black' }}>Quantity</th>
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
                <MobileModel style={{ width: '90%', margin: '0rem auto 1.5rem' }}>
                    <p style={{ fontSize: '24px', letterSpacing: '1.5px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>AllMaster Paint Roller Frames</p>
                </MobileModel>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', width: '90%', margin: '0rem auto' }}>
                    {AllMasterRollers.map((item) => {
                        return (
                            <Fragment>
                                <div style={styling.MobileAllMasterRollers}>
                                    <img style={{ width: '90%', margin: 'auto', marginBottom: '2rem' }} src={item.imageUrl} alt='All Master Rollers'/>
                                    <table style={{ marginBottom: '4rem', borderSpacing: '0', overflowX: 'auto', justifySelf: 'auto', borderCollapse: 'collapse', border: '2px solid blaCK', width: '100%', margin: 'auto' }}>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Cat. No.</th>
                                            <td style={{ border: '1px solid black' }}>{item.catNo}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Description</th>
                                            <td style={{ border: '1px solid black' }}>{item.size}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ border: '1px solid black', backgroundColor: '#aaddef' }}>Qty/Carton</th>
                                            <td style={{ border: '1px solid black' }}>{item.quantity}</td>
                                        </tr>
                                    </table>
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
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