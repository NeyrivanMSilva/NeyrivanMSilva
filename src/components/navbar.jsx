import "./components.css"
import { Link } from "react-router-dom";
import { TbLayoutNavbar } from "react-icons/tb";
import { useState } from 'react';
import NavbarPopUp from "./navbarPopUp";
function Navbar() {
  const [NavbarIsActive, setNavbarIsActive] = useState(true);
  const [IsActive, setIsActive] = useState(true);
  const toggle = () => {

    console.log(NavbarIsActive);
    if (NavbarIsActive === true) {
      setNavbarIsActive(false)

      return document.getElementById("sidebar").style.marginLeft = "-18rem",
        document.getElementById("contentFull").style.marginLeft = "1rem",
        document.getElementById("navbar2").style.marginLeft = "0rem",
        document.getElementById("contentFull").style.transition = "all 1s",
        document.getElementById("navbar2").style.transition = "all 1s"

    }
    if (NavbarIsActive === false) {
      setNavbarIsActive(true)
      return document.getElementById("sidebar").style.marginLeft = "0rem", document.getElementById("contentFull").style.marginLeft = "18rem", document.getElementById("navbar2").style.marginLeft = "18rem"

    }
  }




const hideModal = () => {
  console.log("htrz");
 return (document.getElementsByClassName("modal-backdrop").style.display = "none")
}






  return (
    <>
      <div class="navbar2 nav-web" id="navbar2">
        <div class="row navbar-row m-0">
          <div class="col-sm-4">
            <TbLayoutNavbar className="navbar-icon" onClick={toggle} />
          </div>
          <div class="col-sm-4 text-center">
            <p className="navbar-title">Dashboard</p>
          </div>
          <div class="col-sm-4 text-right">
            <div class="col-md-12">
              <div class="dropdown">

                <button class="btn btn-primary dropdown-toggle button_user" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  Username
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class=" navbar2 nav-mobile" id="navbar3">
        <div class="row navbar-row m-0">
          <div class="col-sm-4">


            <TbLayoutNavbar data-toggle="modal" data-target="#modal3" className="navbar-icon" />




          </div>



          <div class="col-sm-4 text-center">
            <p className="navbar-title">Dashboard</p>
          </div>
          <div class="col-sm-4 text-right">
            <div class="col-md-12">
              <div class="dropdown">

                <button class="btn btn-primary dropdown-toggle button_user" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                  Username
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      <div class="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Páginas</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="nav flex-column bg-white mb-0" id="header_menu">


                      <Link to="/" className="nav-link-container" onClick={()=>{hideModal()}} >
                        <p className="nav-link-text">Home</p>
                      </Link>

                      <Link to="/Cursos" className="nav-link-container" onClick={()=>{hideModal()}}>
                        <p className="nav-link-text">Cursos</p>
                      </Link>
                      <Link to="/Disciplinas" className="nav-link-container"onClick={()=>{hideModal()}}>
                        <p className="nav-link-text">Disciplinas</p>
                      </Link>
                      <Link to="/Professores" className="nav-link-container"onClick={()=>{hideModal()}}>
                        <p className="nav-link-text" >Professores</p>
                      </Link>
                      <Link to="/Alunos" className="nav-link-container"onClick={()=>{hideModal()}}>
                        <p className="nav-link-text">Alunos</p>
                      </Link>
                    </ul>


                  </div>
                </div>
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

  );
}

export default Navbar;
