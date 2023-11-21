import ReactDOM from "react-dom/client"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Home from  "./Components/Home/home"
import About from "./Components/About/about"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      
    </>
  );
}

export default App
library.add(fab, fas, far)