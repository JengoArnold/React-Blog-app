import About from "./pages/About";
import Home from "./pages/Home";
import{BrowserRouter,Routes,Route} from "react-router-dom";



function App(){
  return(
    
    <div>
      <Header>
      <h1>Routing</h1>
      </Header>

<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
</Routes>
 </BrowserRouter>;

      
      <footer>
        <p>&copy;Copyright 2025</p>
      </footer>
    </div>
   
  )
}
export default App;