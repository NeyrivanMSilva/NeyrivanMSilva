import React from 'react';

import assets from "../../dummyData/disciplinas.js"

import "../components.css"

import NovoDisciplina from './novaDisciplina.jsx';
import { useState,useEffect } from 'react';
import EditarDisciplina from './editarDisciplina.jsx';
import VerDisciplina from './verDisciplinas.jsx';
const ListarDisciplinas = ({ name, image }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const [Id, setId] = useState("");
    const [Name, setName] = useState("");
  
    const [Professor, setProfessor] = useState("");

    const data = (id, name, professor) => {
        setId(id)
        setName(name)
        console.log(professor);
        setProfessor(professor)
    }


    return (
        <>
            <div class="container-fluid">

                <div className="row mr-4 ml-4 page-margin">
                    <div className="row mr-1" style={{ justifyContent: "right" }}>

                        <button id="button_add" data-toggle="modal" data-target="#NovoDisciplina">Adicionar disciplina</button>










                        <NovoDisciplina />

                        <VerDisciplina id={Id} name={Name} professor={Professor} />

                        <EditarDisciplina id={Id} name={Name} professor={Professor} />







                        <div class="row container-pesquisa w-100">
                            <div class="col-md-12">
                                <h3 className='p-3 label-pesquisa'>
                                    Procurar Disciplinas
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
                                        Professor:
                                    </label>
                                    <div class="dropdown w-100">

                                        <button class="  dropdown-toggle button_sort w-100 h-100" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                            Escolher
                                        </button>
                                        <div class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Nome A-Z</a><a class="dropdown-item" href="#">Nome Z-A</a> <a class="dropdown-item" href="#">Data de Criação-Mais Velho</a><a class="dropdown-item" href="#">Data de Criação-Mais Novo</a>
                                        </div>
                                    </div>
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
                    </div>
                    <div className="row w-100">
                        <h5 className="mb-4">{assets.length} Disciplinas encontradas</h5>
                    </div>
                    <div className="row mr-0">
                        {assets.map((item) => {
                            const { id, name, nomeProfessor } = item;


                            return (



                                <div className='col-md-6 m-0 p-0 disciplinas-col'>
                                    <div className='disciplina_box p-0' id='box'   >

                                        <div class="row h-100 m-0">

                                            <div class="col-md-12">
                                                <div className="disciplinas_heading_cont">
                                                      <p className="disciplinas_heading">{name}</p>
                                                </div>
                                              
                                                <p className="disciplinas_professor">Lecionada por: {nomeProfessor}</p>
                                                <div className="row mb-4 w-100 m-0">
                                                    <div className="col-md-4 p-1">
                                                        <button className="button_ver" data-toggle="modal" data-target="#verDisciplina" onClick={() => { data(id, name, nomeProfessor) }}>Ver</button>
                                                    </div>
                                                    <div className="col-md-4 p-1">
                                                        <button className="button_edit" data-toggle="modal" data-target="#editarDisciplina" onClick={() => { data(id, name, nomeProfessor) }}>Editar</button>
                                                    </div>
                                                    <div className="col-md-4 p-1">
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
            </div>

        </>
    )


}

export default ListarDisciplinas