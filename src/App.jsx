import React, {useEffect} from "react";
import { HomePage } from "./pages/HomePage";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AddPlace } from "./pages/AddPlace";
import { Profile } from "./pages/Profile";
import { RealHome } from "./pages/RealHome";

const App = () => {
  useEffect(() => {
    document.title = "Oggy"
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<RealHome />} />
        <Route path="/add" element={<AddPlace />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router> 
  );
};

export default App;
