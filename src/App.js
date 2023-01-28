import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Navbar from './Navbar';
import Sobre from './Pages/Sobre';




function App() {
  return (
    <div>
     

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      
      </BrowserRouter>


    </div>
  )
}

export default App