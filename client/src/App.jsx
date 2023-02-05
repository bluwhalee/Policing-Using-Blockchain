import { Route, Routes } from "react-router-dom";
import Views from './views'
import Header from './components/header'

function App() {

  return (
    <div>
      <Header/>
      <Views/>
    </div>
  )
}

export default App
