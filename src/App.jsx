import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import MyList from './Pages/MyList/MyList'
import {HOME,MY_LIST} from "./constans/path"

function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path={HOME} element={<Home/>}/>
      <Route path={MY_LIST} element={<MyList/>}/>
    </Routes>
    </div>
  )
}

export default App
