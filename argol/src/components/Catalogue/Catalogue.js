import React, { Fragment } from 'react';
import Navbar from '../Navbar';
import Product from '../Product/Product';
import Paintbrush1 from '../../assets/paintbrush1.png';

const data = [{  
        cat: '67 113',  
        size: '1"',
        qty: "12 doz"  
    },{  
        cat: '67 114',  
        size: '1"',
        qty: "12 doz"  
    },{
        cat: '67 115',  
        size: '2"',
        qty: "12 doz"  
}]   

const Catalogue = () => {
    return (
    <Fragment>
        <Navbar/>
        <Product header="DeLuxe Flat Paint Brush" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Varnish Brush" img={Paintbrush1} data={data}/>
        <Product header="Classic Flat Paint Brush" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Pointed Brush" img={Paintbrush1} data={data}/>
        {/* 8 types of deluxe refills */}
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Range Refills" img={Paintbrush1} data={data}/>

        {/* 5 types of classic refills */}
        <Product header="Classic Range Refills" img={Paintbrush1} data={data}/>
        <Product header="Classic Range Refills" img={Paintbrush1} data={data}/>
        <Product header="Classic Range Refills" img={Paintbrush1} data={data}/>
        <Product header="Classic Range Refills" img={Paintbrush1} data={data}/>
        <Product header="Classic Range Refills" img={Paintbrush1} data={data}/>

        <Product header="DeLuxe Paint Brush" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Paint Brush" img={Paintbrush1} data={data}/>
        <Product header="DeLuxe Paint Brush" img={Paintbrush1} data={data}/>
    </Fragment>
    )
}

export default Catalogue