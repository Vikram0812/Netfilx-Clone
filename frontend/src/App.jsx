import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

function App() {

  return (
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/signup' element={<SignupPage/>} />
    </Routes>
  )
  
  
}

export default App
