import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
};

export default App;

