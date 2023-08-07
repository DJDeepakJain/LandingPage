
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roter from '../src/route/mainRoute';
import  Layout from '../src/layout/layout';

const App = () => {
  console.log(Roter,"jgkerhjkgh");
  return (
    <BrowserRouter>
    <Routes>
    {Roter.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
    </Routes>
  </BrowserRouter>
  );
};

export default App;


