
import Home from './Home';
import Confirm from './confirm'
import Checkout from "./Checkout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './components/Styles/App.css'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/confirm' element={<Confirm />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
