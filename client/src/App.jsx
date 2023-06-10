import { useState } from "react";
 import { Home, Landing, Details, Formulario } from "./views/Index";
import { Routes ,Route,useLocation} from "react-router-dom";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'
import NavBar from "./componentes/NavBar/NavBar";


function App() {
  const [count, setCount] = useState(0);
const location = useLocation()
  return (
    <div>
{location.pathname === "/Home" && <NavBar/> }

<Routes>
       <Route path="/" element={<Landing/>} />
      <Route path="/Home" element={<Home/>} />
       <Route path="/Detail/:id" element={<Details/>} />
      <Route path="/Create" element={<Formulario/>} />
</Routes>

    </div>
  );
}

export default App;
