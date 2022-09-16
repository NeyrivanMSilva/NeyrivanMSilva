import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/professores.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
import { useState } from 'react';
import Personal from './personalData.jsx';

/* import cursos from "../components/assets/cursos.jpg" */

const NovoDisciplina= ({ id,name, dataN }) => {

    const [PersonalIsActive, setPersonalIsActive] = useState(false);
    const [FsemesterIsActive, setFsemesterIsActive] = useState(false);
    const [SsemesterIsActive, setSsemesterIsActive] = useState(false);



    const addCursoJanela = (input) => {
        console.log(input);
        if (input === "Personal") {
            setPersonalIsActive(true)

            console.log(PersonalIsActive);
            if (FsemesterIsActive === true) {
                setFsemesterIsActive(false)
            }
            if (SsemesterIsActive === true) {
                setSsemesterIsActive(false)
            }
        }

        if (input === "Fsemester") {
            setFsemesterIsActive(current => !current)
            if (PersonalIsActive === true) {
                setPersonalIsActive(current => !current)
            }
            if (SsemesterIsActive === true) {
                setSsemesterIsActive(current => !current)
            }
        }

        if (input === "Ssemester") {
            setSsemesterIsActive(current => !current)
            if (PersonalIsActive === true) {
                setPersonalIsActive(current => !current)
            }
            if (FsemesterIsActive === true) {
                setFsemesterIsActive(current => !current)
            }
        }


    }


    return (
        <>
      <div class="modal fade" id="NovoDisciplina" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" id='modal1'>
                            <div class="modal-content" id='modal2'>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Adicionar disciplina</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="row-addPlayer-Title">

                                            <ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link active add-Player-Button-Container w-100 h-100" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Informação</button>
                                                </li>
                                               
                                            </ul>
                                        </div>

                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> <Personal /></div>
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

export default NovoDisciplina