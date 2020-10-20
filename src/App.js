import React, { useEffect } from "react";
import "./App.css";

import { WOW } from "wowjs";
import HomePage from "./Pages/Home";

const App = () => {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
