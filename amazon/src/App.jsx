
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'

function App() {
 

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
