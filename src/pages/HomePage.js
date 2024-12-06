import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <div className="px-2 py-4 transition-shadow duration-300 bg-gray-200 border rounded-lg shadow-lg h-4/6 md:h-80 hover:shadow-xl max-md:w-11/12">
      <NavBar />
      <Form />
    </div>
  );
}

export default HomePage;