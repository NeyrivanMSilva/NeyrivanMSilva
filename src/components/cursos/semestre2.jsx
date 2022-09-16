import React from 'react';
/* import "../marketplace.css" */
import assets from "../../dummyData/disciplinas.js"
import { Link } from "react-router-dom";
import "../components.css"
import "../buttons.css"
/* import cursos from "../components/assets/cursos.jpg" */

const Semestre2 = ({ name, image }) => {




    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Adicionar
                        </th>
                        <th>
                            Disciplina
                        </th>
                        <th>
                            Professor                        </th>

                    </tr>
                </thead>
                {assets.map((item) => {
                    const { id, name,idProfessor, nomeProfessor } = item;
           
                    return (

                        <tr class="table-active">
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {name}
                            </td>
                            <td>
                                {nomeProfessor}                            </td>

                        </tr>
                    )

                })}
            </table>

        </>
    )


}

export default Semestre2