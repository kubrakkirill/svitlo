import {Inscription, Header, Contact, Special, Questions} from '../src/Components/index'
import './index.css'
import {Info} from "./Components";

function App() {
  return (
    <div>
        <Inscription />
        <Header />
        <Info />
        <Contact />
        <Special />
        <Questions />
    </div>
  );
}

export default App;
