import React from "react";
import Nav from "./Component/Nav"
import {Routes,Route} from "react-router-dom"
import Register from "./Component/Register";

function App() {
  return(
    <div>

<Routes>
<Route exact path="/" element={<Nav/>}/>
<Route exact path="/register" element={<Register/>}/>
<Route exact path="/*" element={<h1>404 Page</h1>}/>
</Routes>
    </div>
  )
}

export default App