import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { ShareBrain } from "./pages/ShareBrain";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/brain/share/:hash" element={<ShareBrain />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
