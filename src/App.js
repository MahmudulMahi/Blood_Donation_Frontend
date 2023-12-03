import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* {token ? ( */}
          <Route path="/" element={<Home/>}>
           
          </Route>
        {/* ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )} */}
      </Routes>
    </Router>
  );
}

export default App;
