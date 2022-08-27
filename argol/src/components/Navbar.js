import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import {
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/argol.png'

const Container = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 2.5rem 0rem 2.5rem;
`

const MobileContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2rem auto 2rem;
align-items: center;

`


const styling = {
    links: {
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        alignItems: 'center',
        margin: 'auto'
    }
}

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
                <div style={styling.links}>
                    <a href='/'><img src={Logo} style={{ height: '35px', width: '75px' }} alt='Logo' /></a>
                    <a href='/' style={{ textDecoration: 'none', color: '#000', marginRight: '1rem' }}>Home</a>
                    <a href='/aboutus' style={{ textDecoration: 'none', color: '#000', marginRight: '1rem' }}>About Us</a>
                    <a href='/catalogue' style={{ textDecoration: 'none', color: '#000', marginRight: '1rem' }}>Products</a>
                    <a href='/contactus' style={{ textDecoration: 'none', color: '#000', marginRight: '1rem' }}>Contact Us</a>
                </div>
            </Container>
        )
    }

    const [open, setOpen] = useState(false)

    const displayMobile = () => {

        const openNavbar = () => {
            setOpen(true)

        }

        const closeNavbar = () => {
            setOpen(false)
        }

        return (
            <MobileContainer>
                <a href='/'><img src={Logo} style={{ height: '35px', width: '75px', marginRight: '2rem' }} alt='Logo' /></a>
                {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar} />}
                {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar} />}
                {open &&
                    <p>test</p>
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