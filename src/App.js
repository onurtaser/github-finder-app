import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./component/layout/Home";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>Content</main>
      </div>
    </>
  );
}

export default App;
