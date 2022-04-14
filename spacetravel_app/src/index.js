import React from 'react';
// import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();