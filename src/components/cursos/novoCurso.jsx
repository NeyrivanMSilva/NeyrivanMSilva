import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/cursos.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
import { useState } from 'react';
import Personal from './personalData.jsx';
import Semestre1 from './semestre1.jsx';
import Semestre2 from './semestre2.jsx';
/* import cursos from "../components/assets/cursos.jpg" */

const NovoCurso = ({ id,name, dataN }) => {

    


  

    return (
        <>
      <div class="modal fade" id="novoCurso" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" id='modal1'>
                            <div class="modal-content" id='modal2'>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Adicionar curso</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="row-addPlayer-Title">

                                            <ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link active add-Player-Button-Container w-100 h-100" id="pills-personalProfessor-tab" data-toggle="pill" data-target="#pills-cursos-info" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Informação</button>
                                                </li>
                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-profile-tab" data-toggle="pill" data-target="#pills-cursos-semester1" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Disciplinas do 1º Semestre</button>
                                                </li>
                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-contact-tab" data-toggle="pill" data-target="#pills-cursos-semester2" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Disciplinas do 2º Semestre</button>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="tab-pane fade show active" id="pills-cursos-info" role="tabpanel" aria-labelledby="pills-home-tab"><Personal/></div>
                                        <div class="tab-pane fade" id="pills-cursos-semester1" role="tabpanel" aria-labelledby="pills-profile-tab"><Semestre1/></div>
                                        <div class="tab-pane fade" id="pills-cursos-semester2" role="tabpanel" aria-labelledby="pills-contact-tab"><Semestre2/></div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                    <button type="button" class="btn btn-primary">Guardar</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )


}

export default NovoCurso