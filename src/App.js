import React from 'react';
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
      <div className="my-12 mx-52 text-lg font-medium text-gray-800">
          <p className="mb-8">As Kerala's COVID-19 cases continue to surge, the state is fighting tooth and nail to flatten the curve and come out victorious.</p>
          <p>Have a look at the graph below:</p>
        </div>
      <Chart />
      
      </div>
    </div>
  );
}

export default App;
