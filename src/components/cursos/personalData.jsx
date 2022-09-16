import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/cursos.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
/* import cursos from "../components/assets/cursos.jpg" */

const Personal = ({ name, image }) => {




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
                         
                        <div className="col-md-12 p-0">
                            <div class="form-group">

                                <label for="exampleInputFile " className='personal_img'>
                                    Imagem do curso
                                </label>
                                <input type="file" class="form-control-file " id="exampleInputFile" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )


}

export default Personal