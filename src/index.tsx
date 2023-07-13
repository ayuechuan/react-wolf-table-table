import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class AppServer {
  constructor() {
    this.render();
  }

  render() {
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(<App />);
  }
}

new AppServer();

