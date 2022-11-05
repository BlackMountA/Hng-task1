import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
// import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <Routes>
    
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
      
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
