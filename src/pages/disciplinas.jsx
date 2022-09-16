import React from 'react';
/* import "../marketplace.css" */

import { Link } from "react-router-dom";
import Header from '../components/header';
import ListarDisciplinas from '../components/disciplinas/disciplinas';
import Navbar from '../components/navbar';
const Disciplinas = ({ name, image }) => {

    console.log(image);


    return (
        <>
           <Navbar/>
  <Header/>
        <div className="content"id='contentFull'>
               <ListarDisciplinas/>
        </div>
        


        </>
    )


}

export default Disciplinas