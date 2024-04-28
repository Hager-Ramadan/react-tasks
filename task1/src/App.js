import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Sites from '../src/components/Sites.js'
import Skills from '../src/components/Skills.js';
import Design from '../src/components/Design.js';
import Responsive from '../src/components/Responsive.js';
import Awards from '../src/components/Awards.js';
import Support from '../src/components/Support.js';
import Footer from '../src/components/Footer.js';

function App() {
    return (
        <div className="App">
            <div className='container'>
                <div className='row align-items-center justify-content-center g-4'>
                    <Sites/>
                    <Skills/>
                    <Design/>
                    <Responsive/>
                    <Awards/>
                    <Support/>

                </div>
            </div>
            <div>
                <Footer/>

            </div>
        </div>
    );
}

export default App;
