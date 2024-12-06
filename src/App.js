import React from "react";
import HomePage from "./pages/HomePage.js";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center min-h-screen lg:items-center bg-gradient-to-br from-gray-100 to-blue-200">
     <div className="flex justify-center w-11/12 mt-4 md:w-4/6 lg:w-4/12">
     <HomePage />
     </div>
    </div>
  );
}

export default App;
