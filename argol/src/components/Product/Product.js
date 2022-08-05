import React from 'react';
import styled from 'styled-components';

const ProductHeader = styled.h2`
    color: black;
    size: 10px;
    margin: auto;
    justify-content: center;
`

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    padding: 3rem 8rem 2rem;
`

const ImageBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    margin: 0rem 0rem 0rem;
`

const DescriptionBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    margin: 0rem 0rem 0rem 0rem;
` 
const BulletBox = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    gap: 0rem;
    margin: 0rem 0rem 0rem 0rem;
` 
const TableBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0rem;
    margin: 6rem 0rem 0rem 0rem;
`
  
const Product = (props) => {
    return (
        <div>
            <Container>
            <ProductHeader>
                {props.header}
            </ProductHeader>
            </Container>
            <Container>
                <ImageBox>
                    <img src={props.img}/>
                </ImageBox>
                <DescriptionBox>
                    <BulletBox>
                        <ul>
                            <li>
                                Suitable for all paints.
                            </li>
                            <li>
                                Ideal for enamel paint
                            </li>
                            <li>
                                Wood handle
                            </li>
                            <li>
                                Good blend of pure bristles
                            </li>
                        </ul>
                    </BulletBox>
                    <TableBox>
                        <table>
                            <tr>
                            <th>Cat No</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            </tr>
                            {props.data.map((val, key) => {
                            return (
                                <tr key={key}>
                                <td>{val.cat}</td>
                                <td>{val.size}</td>
                                <td>{val.qty}</td>
                                </tr>
                            )
                            })}
                        </table>
                    </TableBox>
                </DescriptionBox>
            </Container>
        </div>
    )
} 

export default Product
