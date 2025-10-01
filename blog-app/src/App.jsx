import About from "./pages/About";
import Home from "./pages/Home";
import{BrowserRouter,Routes,Route,} from "react-router-dom";
import Header from "./component/Header";


function App(){
  return(
      <BrowserRouter>
      <Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
</Routes>
 
      
      <footer>
        <p>&copy;Copyright 2025</p>
      </footer>
    </BrowserRouter>

  )
}
export default App;