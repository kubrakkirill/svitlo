import {Inscription, Header, Contact, Special, Questions, Footer} from '../src/Components/index'
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
        <Footer />
    </div>
  );
}

export default App;
