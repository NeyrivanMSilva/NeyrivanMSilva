import React from 'react';
/* import "../marketplace.css" */

import { Link } from "react-router-dom";
import Header from '../components/header';
import ListarAlunos from '../components/alunos/alunos';
import Navbar from '../components/navbar';
const Alunos = ({ name, image }) => {

    console.log(image);


    return (
        <>
        <Navbar/>
  <Header/>
        <div className="content" id='contentFull'>
               <ListarAlunos/>
        </div>
        


        </>
    )


}

export default Alunos