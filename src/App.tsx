import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { vi } from 'vitest';

import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Biblioteca from './pages/Biblioteca/Biblioteca';
import Emprestimos from './pages/Emprestimos/Emprestimos';
import Editar from './pages/Cadastro/Editar';

// const handleSubmitTest = vi.fn();

function App() {
   return (
      <BrowserRouter>
         <Routes>
            {/* handleSubmitTest={handleSubmitTest} */}
            <Route path="/" element={<Login />} />

            <Route path="/home">
               <Route index={true} element={<Home />} />
               <Route path="/home/cadastro" element={<Cadastro />} />
               <Route path="/home/biblioteca" element={<Biblioteca />} />
               <Route path="/home/biblioteca/editar">
                  <Route index={true} element={<Editar />} />
               </Route>
               <Route path="/home/emprestimos" element={<Emprestimos />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
