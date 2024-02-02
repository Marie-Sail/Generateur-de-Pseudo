/* eslint-disable react/no-unknown-property */
import { Outlet } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Coiny&display=swap"
        rel="stylesheet"
      />
      <Outlet />
    </div>
  );
}

export default App;
