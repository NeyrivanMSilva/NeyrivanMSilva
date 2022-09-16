
import './App.css';
import Homepage from './pages/homepage';

import Cursos from './pages/cursos';
import Disciplinas from './pages/disciplinas';
import Professores from './pages/professores';
import Alunos from './pages/alunos';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  return (
<BrowserRouter>
      <Routes>
   
        <Route path="/" element={<Homepage/>} />
        
        <Route path="/Cursos" element={<Cursos/>} />
        <Route path="/Disciplinas" element={<Disciplinas/>} />
        <Route path="/Professores" element={<Professores/>} />
        <Route path="/Alunos" element={<Alunos/>} />

      </Routes>
      </BrowserRouter>
 

  );
}

export default App;
