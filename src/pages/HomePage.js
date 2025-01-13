import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <div className="flex w-11/12 lg:w-4/12 h-4/6 h-xs:h-5/6 ">
      <div className="w-full h-4/6">
      <NavBar />
      <Form />
      </div>
    </div>
  );
}

export default HomePage;