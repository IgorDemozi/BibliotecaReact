import './App.css';
import Login from './Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Cadastro from './Cadastro/Cadastro';
import Biblioteca from './Biblioteca/Biblioteca';
import Emprestimos from './Emprestimos/Emprestimos';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/biblioteca' element={<Biblioteca />} />
            <Route path='/emprestimos' element={<Emprestimos />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
