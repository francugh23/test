import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './elements/Home'
import Edit from './elements/Edit'
import Create from './elements/Create'
import Read from "./elements/Read"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Create />} />
        <Route path="/" element={<Read />} />
        <Route path="/" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App