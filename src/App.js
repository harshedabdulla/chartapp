import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';
import NavigationMenu from './components/NavigationMenu';

const data = [
  {
    name: '10-08',
    Confirmed: 1212,
    Recovered: 1376,
    Deaths: 10,
  },
  {
    name: '11-08',
    Confirmed: 1120,
    Recovered: 1456,
    Deaths: 24,
  },
  {
    name: '12-08',
    Confirmed: 1081,
    Recovered: 1227,
    Deaths: 12,
  },
  {
    name: '13-08',
    Confirmed: 1007,
    Recovered: 1145,
    Deaths: 5,
  },
  {
    name: '14-08',
    Confirmed: 758,
    Recovered: 1017,
    Deaths: 1,
  },
  {
    name: '15-08',
    Confirmed: 604,
    Recovered: 1153,
    Deaths: 16,
  },
  {
    name: '16-08',
    Confirmed:1151,
    Recovered: 1374,
    Deaths: 32,
  },
  {
    name: '17-08',
    Confirmed: 1239,
    Recovered: 1273,
    Deaths: 9,
  },
  {
    name: '18-08',
    Confirmed: 1093,
    Recovered: 1173,
    Deaths: 6,
  },
  {
    name: '19-08',
    Confirmed: 1057,
    Recovered: 1108,
    Deaths: 9,
  },
 
];

function App() {

   return (
    <div>
    <NavigationMenu />  
     <div className="chart-container">
       <div className="chart-box">
         <h1 className="chart-heading">Kerala COVID Rates</h1>
         <LineChart
           width={500}
           height={300}
           data={data}
           margin={{
             top: 5,
             right: 30,
             left: 20,
             bottom: 5,
           }}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
           <Line type="monotone" dataKey="Recovered" stroke="#82ca9d" activeDot={{ r: 8 }}/>
           <Line type="monotone" dataKey="Deaths" stroke="#880808"/>
         </LineChart>
         
</div>
</div>
</div>
);
}

export default App;