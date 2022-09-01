import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";

import './App.css';

const App = () => {
  return (
    <div>
      <ImgContextProvider> 
      <TextContextProvider>
          <Header />
          <Main />
          <Footer />
      </TextContextProvider>
      </ImgContextProvider>
    </div>
  )
  
}

export default App;