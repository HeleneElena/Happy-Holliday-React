import React from "react";
import Card from './components/Main/Card';
import EmptyCard from "./components/Main/EmptyCard/EmptyCard";
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout/Layout';

import './App.css';

const App = () => {
  return (
      <Routes> 
        <Route path="/" element={ <Layout />} > 
          <Route index element={ <EmptyCard />} />
          <Route path="card/:holiday" element={ <Card />} />
        </Route>
        <Route path="siтgleCard/:idText/:idImg" element={ <Card />} />
      </Routes>
  );
}

export default App;