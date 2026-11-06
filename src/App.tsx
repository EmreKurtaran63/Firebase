import './App.css'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div>
      <Header />
      <RouterConfig />
      <ToastContainer/>
    </div>
  )
}

export default App
