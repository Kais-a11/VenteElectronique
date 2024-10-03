import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Auth from "./Authentification/LoginRegistration";
import NoPage from "./pages/NoPage";
import "./App.css"
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Auth" element={<Auth/>} />
      <Route path="*" element={<NoPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
