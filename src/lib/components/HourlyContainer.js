

export const HourlyContainer = ({data}) => {
  if(!data || data === undefined){
    return (<div className="CurrentOuter"/>)
  }

  // console.log("hourly data:", data.data);
  const labels = ["Temperature", "Humidity", "Wind speed", "UV Index", "Rain pro."];
  const numbers = (label) => data.data.slice(0,7).map((item, i) => {
      if(i > 7) return;
      switch(label) {
        case "Temperature":
          return item.apparentTemperature;
        case "Humidity":
          return item.humidity;  
        case "Wind speed":
          return item.windSpeed;
        case "UV Index":
          return item.uvIndex;
        case "Rain pro.":
          return item.precipProbability;
      }
    })
  ;

  const rows = labels.map((label, i) => {
      return(
      <div key={i} className="hourly-rows">
        {label}
        {numbers(label)}
      </div>
    )  
  });

  return (
    <div className="hourly-outer">
      Weather in Silo farm
      <div className="hourly-rows">
        {rows}
      </div>
    </div>
  );
}