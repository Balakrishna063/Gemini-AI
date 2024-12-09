import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
const App = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;