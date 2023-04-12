import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

// console.log(data);
export default function App() {
  const dataTravel = data.map((items) => {
    return <Card item={items} />;
  });

  return (
    <div>
      <Navbar />
      {/* <Card /> */}
      {dataTravel}
    </div>
  );
}
