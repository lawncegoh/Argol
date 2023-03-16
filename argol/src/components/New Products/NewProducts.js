import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

const brush = [
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
                value: "Core diamter sizes. Range from 38mm - 54mm"
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

        return (
            <Fragment>
            <Navbar />
            <Header>
                <p>Other Products</p>
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
                            </div>
                        </Content>
                    </Container>
                )
            })}
        </Fragment>
        )
}

export default NewProducts