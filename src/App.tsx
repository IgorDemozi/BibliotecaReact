import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Biblioteca from './pages/Biblioteca/Biblioteca';
import Emprestimos from './pages/Emprestimos/Emprestimos';
import Editar from './pages/Cadastro/Editar';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/editar' element={<Editar />} />
            <Route path='/biblioteca' element={<Biblioteca />} />
            <Route path='/emprestimos' element={<Emprestimos />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;