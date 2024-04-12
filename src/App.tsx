import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/common/NavigationBar';
import Login from './components/Login';
import Footer from './components/common/Footer';

function App() {


  return (
    <>

      <div className="page-container"> {/* Contenedor principal con flexbox */}
        <BrowserRouter>
          <header className="header">
            <NavigationBar />
          </header>

          {/* Contenido Principal */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </main>
        </BrowserRouter>
        {/* Footer */}
        <Footer />
      </div>
      {/* <div className='grid w-full p-0 initial-container'>

        <BrowserRouter>
          <div className='col-12 p-0'>
            <NavigationBar />
          </div>
          <div className='col-12 flex-grow-1'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />

      </div> */}
    </>
  )
}

export default App
