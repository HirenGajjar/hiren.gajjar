import React from "react";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function MainContent() {
  return (
    <>
      <SocialMedia />
      <div className="router">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainContent;
