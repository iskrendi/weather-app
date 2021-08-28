import { useState, useEffect } from 'react';
import './App.css';
import {
  getData,
  CurrentContainer,
  HourlyContainer,
} from './lib';

function App() {
  const [ weatherData, setWeatherData ] = useState({});

  useEffect(() => {
    getData()
      .then((res) => {
        if(res) {
          setWeatherData({currently: res.currently, hourly: res.hourly});
        }
      })
      .catch((e) => console.error(e));
  }, []);
  
  return (
    <div className="App">
      <CurrentContainer data={weatherData && weatherData.currently}/>
      <HourlyContainer data={weatherData && weatherData.hourly}/>
    </div>
  );
}

export default App;
