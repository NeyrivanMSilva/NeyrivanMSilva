import "./components.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>

    <div className="header_web" id="sideHeader">
       <div class="vertical-nav bg-white" id="sidebar">
   <div className="row header-row-logo">
   <img className="header-logo" src={"./magnifinance-logo.svg"} />
   </div>


        <ul class="nav flex-column bg-white mb-0" id="header_menu_web">
       
         
          <Link to="/" className="nav-link-container">
            <p className="nav-link-text">Home</p>
          </Link>
           
          <Link to="/Cursos" className="nav-link-container">
            <p className="nav-link-text">Cursos</p>
          </Link>
          <Link to="/Disciplinas" className="nav-link-container">
            <p className="nav-link-text">Disciplinas</p>
          </Link>
          <Link to="/Professores" className="nav-link-container">
            <p className="nav-link-text">Professores</p>
          </Link>
          <Link to="/Alunos" className="nav-link-container">
            <p className="nav-link-text">Alunos</p>
          </Link>
        </ul>

      
      </div>
    </div>
     




    </>

  );
}

export default Header;
