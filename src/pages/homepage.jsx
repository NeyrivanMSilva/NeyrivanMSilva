import React from 'react';
 import "./pages.css" 

import Sectors from '../components/homepage/sectors.jsx';
import Header from '../components/header.jsx';
import Navbar from '../components/navbar';
const Homepage = () => {




    return (
        <>
        <Navbar/>
        <Header/>
        <div className="content"id='contentFull'>
               <Sectors/>
        </div>
        

        </>
    )


}

export default Homepage