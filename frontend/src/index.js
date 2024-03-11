import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import PagePresentation from './Components/PagePresentation/PagePresentation';
import About from './Components/About/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <PagePresentation/>
    <About/>
  </React.StrictMode>
);

