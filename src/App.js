import React from "react";
import { BrowserRouter , Routes ,Route } from "react-router-dom";
// import css
import "./App.css"
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import Experience from "./Component/Experience";
import Academic from "./Component/Academic";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Pnf from "./Component/Pnf";
// import GitHub from "./Component/Github";
import Resumedownload from "./Component/Resumedownload";


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={`/home`} element={<Home/>}> </Route>
        <Route path={`/experience`} element={<Experience/>}> </Route>
        <Route path={'/skills'} element={<Skills/>}></Route>
        <Route path={'/academic'} element={<Academic/>}></Route>
        <Route path={'/projects'} element={<Projects/>}></Route>
        <Route path={'/contact'} element={<Contact/>}></Route>
        {/* <Route path={'/github'} element={<GitHub/>}></Route> */}
        <Route path={'/resumedownload'} element={<Resumedownload/>}></Route>
        <Route path={'/*'} element={<Pnf/>}></Route>
      </Routes>
      
    </BrowserRouter>
   

    
  );
}

export default App;
