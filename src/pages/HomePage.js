import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Form from "../components/Form/Form";

function HomePage() {
  return (
    <div className="px-2 py-4 h-4/6 md:h-full">
      <NavBar />
      <Form />
    </div>
  );
}

export default HomePage;