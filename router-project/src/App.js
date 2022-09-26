import React, {useContext} from "react";
import Navbar from "./Components/Navbar";
import ALlRoutes from "./Components/Alloutes";
import Footer from "./Components/Footer";
import { AuthContext } from "./Context/AuthContext";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ALlRoutes/>
      
      
      
      <Footer />
    </div>
  );
}

export default App;
