import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";
import { HolidaysContextProvider } from "./context/holidaysContext";

import './App.css';

const App = () => {
  return (
    <div>
      <HolidaysContextProvider>
        <ImgContextProvider> 
        <TextContextProvider>
            <Header />
            <Main />
            <Footer />
        </TextContextProvider>
        </ImgContextProvider>
      </HolidaysContextProvider>
    </div>
  )
  
}

export default App;