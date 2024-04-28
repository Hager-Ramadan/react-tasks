import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Header from '../src/components/Header.js';
import Content from '../src/components/Content.js';
import Photo from '../src/components/Photo.js';
import Footer from '../src/components/Footer.js';

function App() {
    return (<div className="App">
        <header>
            <Header/>
        </header>
        <div className='row g-0'>
            <Content/>
            <Photo/>
        </div>
        <Footer/>
    </div>);
}

export default App;
