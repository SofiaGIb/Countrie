import { useState } from "react";
 import { Home, Landing, Detail, Formulario } from "./views/Index";
import { Routes ,Route} from "react-router-dom";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'


import NavBar from "./componentes/NavBar/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
<NavBar/>
<Routes>

       <Route path="/" element={<Landing/>} />
       <Route path="/Detail" element={<Detail/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Create" element={<Formulario/>} />

</Routes>

  <h1>COUNTRIES</h1>
    </div>
  );
}

export default App;
