import React, { useEffect, useState, Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
    faBars,
    faTimes,
    faAngleLeft
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo1.png'

const Container = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 1.5rem 0rem 2.5rem;
`

const MobileContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0rem auto 1rem;
padding-top: 0.8rem;
align-items: center;
position: relative;
`

const MobileNavbar = styled.div`
background-color: #bd2626;
position: absolute;
width: 100%;
height: 100%;
z-index: 2;
color: black;
`

const LinksContainer = styled.div`
width: 65%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: auto;
`

const Links = styled.a`
text-decoration: none;
margin-right: 1rem;
color: #787878;

&:hover {
    color: red;
    transition: 10ms ease-in;
    font-weight: bold;
    border-bottom: 1px solid red;
}
&:active {
    color: red;
    font-weight: bold;
    border-bottom: 1px solid red;
}
`

const MobileLinks = styled.a`
text-decoration: none;
color: black;
`

const Navbar = () => {
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
            <Container>
                <LinksContainer>
                    <a href='/'><img src={Logo} style={{ height: '75px', width: '100px' }} alt='Logo' /></a>
                    <Links className='navigationLinks' href='/'>Home</Links>
                    <Links href='/aboutus'>About Us</Links>
                    <Links href='/catalogue'>Products</Links>
                    <Links href='/new-products'>New Products</Links>
                    <Links href='/contactus'>Contact Us</Links>
                </LinksContainer>
            </Container>
        )
    }

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    })


    const displayMobile = () => {

        const openNavbar = () => {
            setOpen(true)

        }

        const closeNavbar = () => {
            setOpen(false)
        }



        return (
            <MobileContainer>
                <a href='/'><img src={Logo} style={{ height: '60px', width: '80px', marginRight: '2rem' }} alt='Logo' /></a>
                {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar} />}
                {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar} />}
                {open &&
                    ReactDOM.createPortal(
                        <MobileNavbar>
                            <div>
                                <p style={{ marginLeft: '1rem', marginTop: '1rem' }} onClick={closeNavbar}><FontAwesomeIcon style={{ marginRight: '0.4rem' }} icon={faAngleLeft} onClick={closeNavbar} />Back</p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'space-between', height: '20%', marginTop: '2rem', width: 'auto'}}>
                                <MobileLinks className='navigationLinks' href='/'>Home</MobileLinks>
                                <MobileLinks href='/aboutus'>About Us</MobileLinks>
                                <MobileLinks href='/catalogue'>Products</MobileLinks>
                                <MobileLinks href='/new-products'>New Products</MobileLinks>
                                <MobileLinks href='/contactus'>Contact Us</MobileLinks>
                            </div>
                        </MobileNavbar>,
                        document.getElementById('navbar-modal')
                    )
                }
            </MobileContainer>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default Navbar