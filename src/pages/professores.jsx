import React from 'react';
/* import "../marketplace.css" */

import { Link } from "react-router-dom";
import Header from '../components/header';
import Professores2 from '../components/professores/professores';
import Navbar from '../components/navbar';
const Professores = ({ name, image }) => {

    console.log(image);


    return (
        <>
             <Navbar/>
  <Header/>
        <div className="content">
               <Professores2/>
        </div>
        


        </>
    )


}

export default Professores