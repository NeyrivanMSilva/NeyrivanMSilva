import React from 'react';
/* import "../marketplace.css" */

import Sector from './sector.jsx';
import { Link } from "react-router-dom";
import "../components.css"
const Sectors = () => {




    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="text-center homepage_heading">
                            Bem-Vindo ao portal escolar
                        </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row m-0">
                            <div class="col-md-6 p-0 homepage-sector-col">
                                <Link to="/Cursos" className="nav-link-container" /* onClick={() => { hideModal() }} */ >
                                    <Sector name="Cursos" image='./cursos.jpg' />
                                </Link>





                            </div>
                            <div class="col-md-6 p-0 homepage-sector-col">
                            <Link to="/Disciplinas" className="nav-link-container" /* onClick={() => { hideModal() }} */ >
                                    <Sector name="Disciplinas" image='./disciplinas.avif' />
                                </Link>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div class="col-md-6 p-0 homepage-sector-col">
                            <Link to="/Professores" className="nav-link-container" /* onClick={() => { hideModal() }} */ >
                                    <Sector name="Professores" image='./professor.avif' />
                                </Link>
                            </div>
                            <div class="col-md-6 p-0 homepage-sector-col">
                            <Link to="/Alunos" className="nav-link-container" /* onClick={() => { hideModal() }} */ >
                                    <Sector name="Alunos" image='./aluno.avif' />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )


}

export default Sectors