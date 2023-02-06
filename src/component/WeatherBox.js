import React from 'react'

const WeatherBox = ({weather}) => {
  
  return (
    <div className="weather-box">
      <div>{weather ? weather.name : ""}</div>
      <h2>{weather? (weather.main.temp.toFixed(1)) + "℃" : "현재위치는 모바일에서 지원되지 않습니다."}</h2> {/* toFixed(1) 는 소수점 1자리로 반 올림.*/}
      <h3>{weather ? weather.weather[0].description : "　"}</h3>


    </div>
  );
}

export default WeatherBox