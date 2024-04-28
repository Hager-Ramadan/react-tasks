import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Photo from '../src/components/Photo';
import Card1 from '../src/components/Card1';
import Card2 from '../src/components/Card2';
import Card3 from '../src/components/Card3';
import Card4 from '../src/components/Card4';
import Footer from '../src/components/Footer';


function App() {
    return (<div className="App">
        <div className='row row-photo g-lg-0 g-md-5'>
            <div className='col-lg-6 col-md-12'>
                <Photo/>
            </div>
            <div className='col-lg-6 col-md-12'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 pb-5'>
                        <Card1/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Card2/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Card3/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <Card4/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default App;
