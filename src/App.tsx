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
      <BrowserRouter>
        <div className="p-grid p-justify-between p-align-center p-p-3 p-shadow-2">
          <NavigationBar />
        </div>


        <div className="content p-grid p-dir-col">
          <div className="p-col">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
          <footer className="p-grid p-justify-center p-align-center">
            <div className="p-col-12 p-0 footer">
                 <Footer />
            </div>
        </footer>
        </div>


       
      </BrowserRouter>
    </>
  )
}

export default App
