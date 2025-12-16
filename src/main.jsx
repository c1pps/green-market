import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './assets/pages/Home'
import Produits from './assets/pages/Produits'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/produits" element={<Produits />}></Route>
      </Routes>
  </BrowserRouter>,
)
