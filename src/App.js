import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("DK-FOLIO-000000-01");
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
