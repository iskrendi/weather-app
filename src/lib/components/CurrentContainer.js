
export const CurrentContainer = ({data}) => {
  if(!data || data === undefined){
    return (<div className="CurrentOuter"/>)
  }

  // console.log("current data: ", data);
  const iconMapper = (iconType) => {
    switch(iconType) {
      case "clear-day":
      case "clear-night":
        return {
          top: "./icons/icon-sunny.png",
          topAlt: "",
          bottom: "./icons/illustration-penguin.png",
          bottomAlt: "",
        };
      case "partly-cloudy-day":
      case "partly-cloudy-night":
      case "cloudy":
        return {
          top: "./icons/icon-cloudy.png",
          topAlt: "",
          bottom: "./icons/illustration-cow.png",
          bottomAlt: "",
        }; 
      case "rainy-day":
      case "rainy-night":
        return {
          top: "./icons/icon-rainy.png",
          topAlt: "",
          bottom: "./icons/illustration-sheep.png",
          bottomAlt: "",
        };
        
      default:
        return {};
    }
  };

  const topRow = (
    <div className="current-top-row">
      <span>{data.apparentTemperature} &deg;F</span>
      <img 
        className="current-icon-top" 
        src={iconMapper("partly-cloudy-night").top}
        alt={iconMapper(data.icon).topAlt}
      />
      <span>{data.humidity} %</span>
    </div>
  );

  const bottomRow = (
    <div className="current-bottom-row">
      <img 
        className="current-icon-bottom" 
        src={iconMapper("partly-cloudy-night").bottom}
        alt="it is cloudy"
      />
    </div>
  );

  return (
    <div className="current-outer">
      {topRow}
      {bottomRow}
    </div>
  )

}