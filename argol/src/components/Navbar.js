import React, { useEffect, useState, Fragment} from 'react'
import styled from 'styled-components'
import {
    faDiscord,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
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
padding: 3rem 0rem 3rem;
`

const MobileContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 2rem auto 2rem;
`

const Socials = styled.div`
display: flex;
flex-direction: row;
width: 12%;
justify-content: space-around;
`

const MobileNavbar = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: black;
z-index: 2;
overflow: hidden;
`

const styling = {
    links: {
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
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
                    <img src={Logo} style={{height: '35px', width: '70px', marginRight: '2rem'}} alt='Logo'/>
                    <a href='/' style={{textDecoration: 'none', color: '#000'}}>Home</a>
                    <a href='/catalogue' style={{textDecoration: 'none', color: '#000'}}>Catalogue</a>
                    <a href='/contactus' style={{textDecoration: 'none', color: '#000'}}>Contact Us</a>
                </div>

                <Socials>
                    <a href='/'><FontAwesomeIcon icon={faTwitter} style={{color: '#d9d9d9', height: '25px', width: '25px'}}/></a>
                    <a href='/'><FontAwesomeIcon icon={faInstagram} style={{color: '#d9d9d9', height: '25px', width: '25px'}}/></a>
                    <a href='/'><FontAwesomeIcon icon={faDiscord} style={{color: '#d9d9d9', height: '25px', width: '25px'}}/></a>
                </Socials>
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
                <img src={Logo} style={{height: '25px', width: '130px', marginRight: '2rem'}} alt='Logo'/>
                {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar}/>}
                {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar}/>}
                {open && 
                <Fragment>
                    <MobileNavbar>

                    </MobileNavbar>
                </Fragment>
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