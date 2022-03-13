import React from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <NavBar title={"TextUtils"} />
      <TextForm heading={"Enter Text To Analyze:"} />
    </div>
  );
}

export default App;
