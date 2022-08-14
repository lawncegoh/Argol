import React from "react";
import styled from 'styled-components';
     
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 8px;
    background: #D4F1F4;
`
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;
   
const Row = styled.div`
  display: flex;
  padding-top: 10px;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
  margin: auto;
  `;
   
const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
  margin: auto;
  text-align:center;
`;

const CopyrightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 25px;
    background: #D4F1F4;
`

const Copyright = styled.a`
  color: black;
  margin-bottom: 5px;
  font-size: 10px;
  text-decoration: none;
  text-align: center;
`;
  
const Footer = () => {
  return (
    <Container>
        <Row>
            <Column>
                <FooterLink href='/contactus'>Info</FooterLink>
            </Column>
            <h6>{'\u25CF'}</h6>
            <Column>
                <FooterLink href='/contactus'>Support</FooterLink>
            </Column>
            <h6>{'\u25CF'}</h6>
            <Column>
                <FooterLink href='/catalogue'>Products</FooterLink>
            </Column>
        </Row>
        <CopyrightContainer>
            <Copyright>Argol & Company Pte Ltd</Copyright>
        </CopyrightContainer>
    </Container>
  );
};
export default Footer;