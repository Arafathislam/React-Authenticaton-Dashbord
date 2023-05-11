import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact"
import Layout from "./components/pages/Layout";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route element={<Home/>}/>
      <Route element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
