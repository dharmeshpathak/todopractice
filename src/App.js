import React from "react";
import "./App.css";
import Fieldf from "./Fieldf";
import Footer from "./Footer"
function App() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flexbox",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1 className="my-5 " style={{ color: "blue",fontWeight:"bold",
      fontFamily:"georgia" }}>
        Todo - App
      </h1>
      <Fieldf />
      <Footer />
    </div>
  );
}

export default App;
