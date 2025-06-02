<<<<<<< HEAD
    const parent= React.createElement("div",{id: "parent"}, React.createElement("div",{id:"child"},React.createElement("h1",{id:"text"},"Hellow World.")));
=======
   import React from "react";
   import ReactDOM from "react-dom/client";
    
    const parent= React.createElement("div",{id: "parent"}, React.createElement("div",{id:"child"},React.createElement("h1",{id:"text"},"My name is Yogendra")));
>>>>>>> 89ed4fc (Episode-01)
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    console.log(parent);