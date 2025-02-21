import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import HomePage from "./pages/home/HomePage"
import LoginPage from "./pages/LoginPage"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
      </Routes>
      <Footer />
    </>
    
  )
  
  
}

export default App
