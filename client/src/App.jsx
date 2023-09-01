
import  style from './App.module.css'
import Home from './Componentes/Home/Home'
import LandingPage from './Componentes/Landing/LandingPage'
import {Route,Routes} from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar'
import Detail from './Componentes/Detail/Detail'
import Form from './Componentes/Form/Form'
import { useLocation } from 'react-router-dom'
import Activity from './Componentes/Activities/Activity'
function App() {
  const location = useLocation()
  return (
    <div className={style.app}>

    {location.pathname !== "/" &&  location.pathname !== "/About" && <Navbar/>}
<Routes>
  <Route path='/Detail/:id' element={<Detail/>}/>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/createActivity'element={<Form/>}/>
  <Route path='/Activity' element={<Activity/>}/>
</Routes>
    </div>
  )
}

export default App
