
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import SharedLayout from './pages/SharedLayout.js'

import Home from './pages/Home.js';
import About from './pages/About.js';
import Browse from './pages/Browse.js';
import Select from './pages/Select.js';
import Contact from './pages/Contact.js';
import Error from './pages/Error.js';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={ <Home />}/>
            <Route path='About' element={<About />} />
            <Route path='Browse' element={<Browse />} />
            <Route path='Select' element={<Select />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='*' element={ <Error />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
