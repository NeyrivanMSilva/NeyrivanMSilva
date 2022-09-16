import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/professores.js"
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

                        <label className='form-label w-100'>
                            Professor
                        </label>
                        <div class="dropdown">

                            <button class="btn btn-primary dropdown-toggle button_user mt-0" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                Escolher
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {assets.map((item) => {
                                    const { id, name } = item;


                                    return (

                                        <a class="dropdown-item" href="#">{name}</a>)
                                })}
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

        </>
    )


}

export default Personal