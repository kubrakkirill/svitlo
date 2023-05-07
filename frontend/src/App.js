import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main, Events} from '../src/Pages/Index'
import './index.css'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main />}/>
              <Route path='/events' element={<Events />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
