import React from "react";
import './App.css';
import Content from './Components/content/Content';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { memo, useState } from 'react'

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  );
}

export default App;
