import { useState} from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard'
import Header from './components/header'
import Login from './components/login'
import Registerfir from './components/Dashboards/registerFIR'
import ProtectedRoutes from './components/Protected/protect';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            {/* <Route element={<ProtectedRoutes/>}> */}
              <Route path="/Dashboard" element={<Dashboard/>} />
              <Route path="/dashboard/registerfir" element={<Registerfir/>} />
            {/* </Route> */}
            <Route path="*" element={<Login/>} />
            <Route path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
        
  )
}

export default App
