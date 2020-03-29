import React from "react";
import ReactDOM from "react-dom";

const element = <h1>HAlo world</h1>;
console.log(element); //logs the react obj on console.

//Function renders the react jsx object in the root element of the public/index.html
ReactDOM.render(element, document.getElementById("root"));
