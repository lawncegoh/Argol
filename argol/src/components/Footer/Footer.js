import React, { useEffect, useState, Fragment } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush
} from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
width: 100%;
height: 200px;
background-color: #ffefd4;
`

const Phrase = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 80%;
color: black;
text-align: center;
`

const Footer = () => {

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
        <Phrase>
          <p style={{ letterSpacing: '1.4px', fontSize: '18px', borderTop: '1px solid #a6a6a6', paddingTop: '2.5rem', width: '85%', margin: 'auto' }}><FontAwesomeIcon icon={faBrush} /> Before You Start, Think Of The Finish</p>
          <div style={{ fontSize: '14px' }}>
            <p>Argol & Company Pte Ltd</p>
            <p>@ 2022 All Rights Reserved.</p>
          </div>
        </Phrase>
      </Container>
    )
  }

  const displayMobile = () => {
    return (
      <Container>
        <Phrase>
          <p style={{ letterSpacing: '1.4px', fontSize: '18px', borderTop: '1px solid #a6a6a6', paddingTop: '2.5rem', width: '85%', margin: 'auto' }}><FontAwesomeIcon icon={faBrush} /> Before You Start, Think Of The Finish</p>
          <div style={{ fontSize: '14px' }}>
            <p>Argol & Company Pte Ltd</p>
            <p>@ 2022 All Rights Reserved.</p>
          </div>
        </Phrase>
      </Container>
    )
  }

  return (
    <Fragment>
      {mobileView ? displayMobile() : displayDesktop()}
    </Fragment>
  );
};
export default Footer;