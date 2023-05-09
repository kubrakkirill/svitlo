import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main, Events, AboutUs, Services, Contact} from '../src/Pages/Index'
import './index.css'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/events' element={<Events />}/>
              <Route path='/about' element={<AboutUs />}/>
              <Route path='/services' element={<Services />}/>
              <Route path='/contact' element={<Contact />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
