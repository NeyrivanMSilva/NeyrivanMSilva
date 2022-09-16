import React from 'react';
import assets from "../../dummyData/cursos.js"

import "../components.css"
import "../buttons.css"
import { useState,useEffect } from 'react';
import EditarCurso from './editarCurso.jsx';
import NovoCurso from './novoCurso.jsx';
import VerCurso from './verCurso.jsx';


const ListarCursos = ({ name, image }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });






    const [Id, setId] = useState("");
    const [Name, setName] = useState("");
    const [Image, setImage] = useState("");



    const data = (id, name, image) => {
        setId(id)
        setName(name)
        setImage(image)
    }


    return (
        <>

            <div class="container-fluid ">



            </div>


            <div className="row mr-4 ml-4 page-margin" style={{ justifyContent: "right" }}>

                <button id="button_add" data-toggle="modal" data-target="#novoCurso">Adicionar curso</button>

                <EditarCurso id={Id} name={Name} image={Image} />
                <NovoCurso />
                <VerCurso  id={Id} name={Name} image={Image} />



                <div class="row container-pesquisa w-100">
                    <div class="col-md-12">
                        <h3 className='p-3 label-pesquisa'>
                            Procurar Cursos
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
                    <h5 className="mb-4">{assets.length} cursos encontrados</h5>
                </div>

                <div className="cursos-web w-100">
                    {assets.map((item) => {
                        const { id, name, image } = item;
                        return (



                            <div className='col-md-12 pr-1 mb-2 p-0'>
                                <div className='curso_box p-0' id='box'   >

                                    <div class="row h-100 m-0">
                                        <div class="col-md-4 cursos-col4" style={{
                                            backgroundImage: 'url(' + image + ')', borderRadius: "10px 0px 0px 10px", backgroundSize: "cover"
                                        }} >
                                        </div>
                                        <div class="col-md-8">
                                            <p className="cursos_heading">{name}</p>
                                            <div className="row mb-4">
                                                <div className="col-md-4">
                                                    <button className="button_ver" data-toggle="modal" data-target="#verCurso" onClick={() => { data(id, name, image) }}>Ver</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="button_edit" data-toggle="modal" data-target="#editarCurso" onClick={() => { data(id, name, image) }}>Editar</button>
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


                <div className="cursos-mobile w-100">
                    {assets.map((item) => {
                        const { id, name, image, professor } = item;

                        return (



                            <div className='col-md-12 pr-1 p-0 mb-2'>
                                <div className='curso_box p-0' id='box'   >

                                    <div class="row h-100 m-0">

                                        <div class="col-md-8">
                                            <p className="cursos_heading">{name}</p>
                                            <div className="row mb-4">
                                                <div className="col-md-4">
                                                    <button className="button_ver" data-toggle="modal" data-target="#verCurso" onClick={() => { data(id, name, image) }}>Ver</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="button_edit" data-toggle="modal" data-target="#editarCurso" onClick={() => { data(id, name, image) }}>Editar</button>
                                                </div>
                                                <div className="col-md-4">
                                                    <button className="button_apagar">Apagar</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 cursos-col4" style={{
                                            backgroundImage: 'url(' + image + ')', borderRadius: "10px 0px 0px 10px", backgroundSize: "cover"
                                        }} >
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

export default ListarCursos