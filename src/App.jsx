import React, {useEffect} from "react";
import MapContainer from "./app/intro/page";
import navbar from "./component/navbar";
import { HomePage } from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    document.title = "Oggy"
  }, [])
  return (
    <div style={{height: "100vh"}}>
      <HomePage />
    </div>
  );
};

export default App;
