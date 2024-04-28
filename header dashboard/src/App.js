import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import {
    Route,
    Routes,
    BrowserRouter,
    Link,
    Outlet
} from "react-router-dom";
function App() {
    return (<div className="App">
        <BrowserRouter> {/* Put Your Layout here */}
            {/* This is Part To Show How Links Work */}
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index
                        element={<HomePage/>}/>
                    <Route path="testpath"
                        element={"Router is working"}/>
                    <Route path="*"
                        element={"Page 404"}/>
                </Route>
            </Routes>
            <Outlet/>
        </BrowserRouter>
    </div>);
}

export default App;
