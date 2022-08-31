import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import './App.css';
import { TextContext } from "./context/textContext";


const App = () => {
  return (
    <div>
      <TextContext>
        <Header />
        <Main />
        <Footer />
      </TextContext>
    </div>
  )
  
}

export default App;