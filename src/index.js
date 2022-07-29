import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './WeatherApp.css';
//import Counter from './App'
// import SpeedConverter from './Mbps'
import WeatherApp from './WeatherApp';

//const counters = Array.from({ length: 1 }, (_, index) => index);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
	
	<div>
		{/* STEP 2: 使用 map 產生多個 <Counter /> 
		{counters.map((item) => (
		<Counter />
		))}
		
		*/}
	 	<WeatherApp />
    </div>


);