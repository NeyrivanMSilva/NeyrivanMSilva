import React from 'react';
/* import "../marketplace.css" */

import { Link } from "react-router-dom";
import "../components.css"
/* import cursos from "../components/assets/cursos.jpg" */

const Sector = ({name, image}) => {




    return (
        <>
            <div className='homepage_box p-0' id='box' style={{
                backgroundImage: 'url(' + image + ')',
            }}   >

                <div className='box-info'>
                    <div className='d-flex flex-column justify-content-center'>
                        <h3 className='text-white shadow' id='name'>{name}</h3>

                       
                            <button class="button_homepage">Entrar</button>
            

                    </div>
                </div>


            </div>

        </>
    )


}

export default Sector