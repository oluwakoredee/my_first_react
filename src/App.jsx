import { useState } from "react";
import image from "./assets/kens.jpg";

import "./App.css";
import NavBar from "./components/NavBar";
import Greeting from "./components/Greeting";
import State from "./components/State";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //Arrow Function
  const handleclick = () => {
    console.log("hey");
  };

  const FirstName = "Aloba";
  const LastName = "Kehinde";

  //custom styling
  const styling = {
    fontSize: "50px",
    textTransform: "uppercase",
  };

  const popUp = () =>{
    alert(`my name is ${'shola'}`)
  }

  return (
    <div>
      <NavBar />
      {/* <Child></Child> */}
      <State/>
      <Greeting name={'kenny'} occupation={'Fullstack developer'} alert={popUp}/>
      <Greeting name={'korede'}/>
      <Greeting name={'kehinde'}/>
      {arr.map((items, i) => (
        <p key={i}>{items}</p>
      ))}
      <img src={image} alt="" />
      <img src="/vite.svg" alt="" />
      {/* custom styling */}
      <h1 style={styling}>holder</h1>
      <h1 style={{ fontSize: "60px", textTransform: "uppercase" }}>
        {FirstName + " " + LastName}
      </h1>
      <button onClick={handleclick} className="">
        click me
      </button>
      {/* another way of doing onclick for the code */} <br /> <br />
      <button onClick={() => console.log("first")}>Hey</button>
    </div>
  );
}

export default App;
