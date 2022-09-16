import React from 'react';

import "../components.css"
import "../buttons.css"
import { useState } from 'react';


const VerCurso = ({ id,name, image }) => {

    const [PersonalIsActive, setPersonalIsActive] = useState(false);




   


    return (
        <>
          <div class="modal fade" id="verCurso" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" id='modal1'>
                    <div class="modal-content" id='modal2'>
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ver curso</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="row-addPlayer-Title">

                                    <ul class="nav nav-pills h-100 justify-content-center" id="pills-tab" role="tablist">

                                        <li class="nav-item add-Player-Button" role="presentation">
                                            <button class="nav-link active add-Player-Button-Container w-100 h-100" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{ backgroundColor: PersonalIsActive ? '#006DD7' : '', color: PersonalIsActive ? 'white' : '' }}>Informação pessoal</button>
                                        </li>
                                       

                                    </ul>
                                </div>

                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label className='form-label'>
                                                    Nome
                                                </label>
                                                <input class="form-control" id="SearchInput" value={name} disabled /> 
                                               
                                                <label className='form-label '>
                                                    Imagem
                                                </label>
                                               <div className="div mb-4 curso_imagem" >  

                                                        <img src={`${image}`} className="w-100"/>

                                               </div>
                                                
                                                
                                            </div>

                                        </div>
                                    </div>





                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>

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

export default VerCurso