import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact"
import Layout from "./components/pages/Layout";
import LoginReg from "./components/pages/auth/LoginReg"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<LoginReg/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
