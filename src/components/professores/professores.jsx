import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/professores.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
/* import cursos from "../components/assets/cursos.jpg" */
import NovoProfessor from './novoProfessor.jsx';
import VerProfessor from './verProfessor.jsx';
import EditarProfessor from './editarProfessor.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
const Professores2 = ({ name, image }) => {


    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const [Id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Nascimento, setNascimento] = useState("");
    const [Vencimento, setVencimento] = useState("");

    const data = (id, name, nascimento, vencimento) => {
        setId(id)
        setName(name)
        setNascimento(nascimento)
        setVencimento(vencimento)
    }


    return (
        <>
            <div class="container-fluid  p-0">

                <div className="row mr-4 ml-4" style={{ justifyContent: "right" }}>

                    <button id="button_add" data-toggle="modal" data-target="#NovoProfessor">Adicionar professor</button>


                    {/* 
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document" id='modal1'>
                            <div class="modal-content" id='modal2'>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="row-addPlayer-Title">

                                            <ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link active add-Player-Button-Container w-100 h-100" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personal Info</button>
                                                </li>
                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Player Info</button>
                                                </li>
                                                <li class="nav-item add-Player-Button" role="presentation">
                                                    <button class="nav-link add-Player-Button-Container w-100 h-100" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Stats</button>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">uhbi</div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">ouh87g67f6f8f</div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div> */}





                    <NovoProfessor />
                    <VerProfessor id={Id} name={Name} nascimento={Nascimento} vencimento={Vencimento} />
                    <EditarProfessor id={Id} name={Name} nascimento={Nascimento} vencimento={Vencimento} />












                    <div class="row container-pesquisa w-100">
                        <div class="col-md-12">
                            <h3 className='p-3 label-pesquisa'>
                                Procurar professores
                            </h3>
                        </div>
                        <div class="row w-100 m-0 pb-4">
                            <div class="col-md-4">
                                <label className='form-label'>
                                    Nome
                                </label>
                                <input class="form-control" id="SearchInput" />
                            </div>

                            <div class="col-md-4">
                                <label className='form-label'>
                                    Sortear por:
                                </label>
                                <div class="dropdown w-100">

                                    <button class="  dropdown-toggle button_sort w-100 h-100" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                        Sortear
                                    </button>
                                    <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Nome A-Z</a><a class="dropdown-item" href="#">Nome Z-A</a> <a class="dropdown-item" href="#">Data de Criação-Mais Velho</a><a class="dropdown-item" href="#">Data de Criação-Mais Novo</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <button className="button_limpar">Apagar filtros</button>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100">
                        <h5 className="mb-4">{assets.length} professores encontrados</h5>
                    </div>

                    {assets.map((item) => {
                        const { id, name, nascimento, vencimento } = item;


                        return (



                            <div className='col-md-12 p-0'>
                                <div className='professor_box p-0' id='box'   >

                                    <div class="row h-100 m-0">

                                        <div class="col-md-12">
                                            <p className="cursos_heading">{name}</p>
                                            <div className="row mb-4 m-0">
                                                <div className="col-md-4">
                                                    <button className="button_ver" data-toggle="modal" data-target="#verProfessor" onClick={() => { data(id, name, nascimento, vencimento) }}>Ver</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="button_edit" data-toggle="modal" data-target="#editarProfessor" onClick={() => { data(id, name, nascimento, vencimento) }}>Editar</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="button_apagar">Apagar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





                                </div>

                            </div>






                        )
                    })}

                </div>
            </div>

        </>
    )


}

export default Professores2