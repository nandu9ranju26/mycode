import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import employee from "./employee";
import HR from "./HR";


function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/> }></Route>
            <Route path="/admin" element={ <Admin/>}></Route>
            <Route path="/HR" element={<HR/> }></Route>
            <Route path="/employee" element={ <employee/>}></Route>
            
        </Routes>
        </BrowserRouter>
        
    )
}
export default App