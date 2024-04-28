import "./App.css"
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faShop} from "@fortawesome/free-solid-svg-icons";

import {
    Route,
    Routes,
    BrowserRouter,
    Link,
    Outlet
} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter> {/* Put Your Layout here */}
                {/* This is Part To Show How Links Work */}
                <div className="col-12 alert  d-flex justify-content-center navbar">
                    <Link className="m-1" to="/">
                        <FontAwesomeIcon icon={faHouse}/>
                        Home

                    </Link>
                    <Link className="m-1" to="/shop">
                        <FontAwesomeIcon icon={faShop}/>
                        Shop

                    </Link>
                </div>
                <Routes>
                    <Route path="/"
                        element={<HomePage/>}/>
                    <Route path="/shop"
                        element={<ShopPage/>}/>
                    <Route path="*" element= {
                                                         <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"/>}/>

                </Routes>
                <Outlet/>
            </BrowserRouter>
        </div>
    );
}

export default App;
