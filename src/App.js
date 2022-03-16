import React from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <div className="App">
      <NavBar title={"TextUtils"} />
      <About />
      {/* <TextForm heading={"Enter Text To Analyze:"} /> */}
    </div>
  );
}

export default App;
