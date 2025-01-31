import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <div className="p-10 bg-white shadow-sm md:shadow-lg ">
      <NavBar />
      <Form />
    </div>
  );
}
 
export default HomePage;