import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ImgContextProvider } from "./context/imgContext";

import './App.css';

const App = () => {
  return (
    <div>
        <ImgContextProvider> 
            <Header />
            <Main />
            <Footer />
        </ImgContextProvider>
    </div>
  )
  
}

export default App;