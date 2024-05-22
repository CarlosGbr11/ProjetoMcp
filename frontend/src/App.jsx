import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'


import{ BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';

function App() {
 

  return (

    <Router>
    <div className='container-app'>

      <header>
      <Header/>
        
      </header>

      <main>
        
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create' element={<Create/>}/>
        <Route path='/Read' element={<Read/>}/>
        <Route path='/Update' element={<Update/>}/>
        </Routes>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
    </Router>
  )
}

export default App
