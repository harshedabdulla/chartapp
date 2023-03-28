import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Chart from './components/Chart'

function App() {

   return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <NavigationMenu />  
      </div>
      <div className="col-span-10">
      <Chart />
      </div>
    </div>
  );
}

export default App;
