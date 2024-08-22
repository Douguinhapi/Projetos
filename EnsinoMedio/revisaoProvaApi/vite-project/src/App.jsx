import './App.css'
import Home from './screens/Home'
import PaginaCep from './screens/PaginaCep'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/busca-cep" element={<PaginaCep />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
