import './App.css';
import Login from './Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
