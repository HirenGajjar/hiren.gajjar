import React, { useState, useEffect } from "react";
import Loader from "../src/components/Loader";
import "./index.css";
import MainContent from "./components/MainContent";
import { PiLetterCircleHFill } from "react-icons/pi";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="app-container">
      {loading ? <Loader /> : <MainContent />}
    </div>
  );
}

export default App;
