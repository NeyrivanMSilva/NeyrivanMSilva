import React from 'react';
/* import "../marketplace.css" */

import { Link } from "react-router-dom";
import Header from '../components/header';
import ListarCursos from '../components/cursos/cursos';
import Navbar from '../components/navbar';
const Cursos = ({ name, image }) => {

    console.log(image);


    return (
        <>
        <Navbar/>
  <Header/>
        <div className="content" id='contentFull'>
               <ListarCursos/>
        </div>
        


        </>
    )


}

export default Cursos