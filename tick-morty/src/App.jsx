import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Characters } from "./components/characters";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Characters />
      <Footer />
    </>
  );
}

export default App;
