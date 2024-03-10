import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import PagePresentation from './Components/PagePresentation/PagePresentation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <PagePresentation/>
  </React.StrictMode>
);

