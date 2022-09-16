import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/cursos.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
/* import cursos from "../components/assets/cursos.jpg" */

const Personal = () => {



    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <label className='form-label'>
                            Nome
                        </label>
                        <input class="form-control" id="SearchInput"


                        />

                       

<label className='form-label'>
                            Data de Nascimento
                        </label>
                        <input class="form-control" id="SearchInput" type="Date"


                        />
 <label className='form-label'>
                            Vencimento Anual
                        </label>
                        <input class="form-control" id="SearchInput" 
                        />
                       
                    </div>

                </div>
            </div>

        </>
    )


}

export default Personal