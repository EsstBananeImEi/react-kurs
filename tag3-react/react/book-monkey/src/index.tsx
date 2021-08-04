import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function showTime() {
//     const time = new Date().toLocaleTimeString();
//     const timeElement = (
//         <div>
//             <p>Es ist jetzt {time} Uhr</p>
//         </div>
//     )
//     ReactDOM.render(timeElement, document.getElementById('root'))
// }
// setInterval(showTime, 1000)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
