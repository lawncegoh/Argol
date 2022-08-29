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
    transition: 100ms ease-in;
    font-weight: bold;
    border-bottom: 1px solid red;
}
&:active {
    color: red;
    font-weight: bold;
    border-bottom: 1px solid red;
}

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
                    <a href='/'><img src={Logo} style={{ height: '35px', width: '75px' }} alt='Logo' /></a>
                    <Links className='navigationLinks' href='/'>Home</Links>
                    <Links href='/aboutus'>About Us</Links>
                    <Links href='/catalogue'>Products</Links>
                    <Links href='/contactus'>Contact Us</Links>
                </LinksContainer>
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