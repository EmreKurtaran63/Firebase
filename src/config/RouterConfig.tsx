import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'

function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/Home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default RouterConfig