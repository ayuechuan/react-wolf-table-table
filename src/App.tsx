import React from 'react';
import './App.css';
import { Toolsbar } from './pages/tools-bar';
import { Smartsheets } from './pages/table';
import '@wolf-table/table/dist/table.min.css';
import { GetContainer } from './pages/getContainer';

function App() {
  return (
    <div className="App">
       <Toolsbar />
       <Smartsheets />
       <GetContainer />
    </div>
  );
}

export default App;
