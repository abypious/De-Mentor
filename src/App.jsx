import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Route>
      <Routes path='/login' element={<Login />}></Routes>
    </Route>
      <Login/>
    </BrowserRouter>
  )
}

export default App

