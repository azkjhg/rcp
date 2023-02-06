import './App.css';
import WeatherBox from './component/WeatherBox';
import { useState, useEffect } from 'react';
import WeatherButton from './component/WeatherButton';

import BarLoader from "react-spinners/BarLoader";


function App() {
  const [ weather, setWeather] = useState(null);
  const [ city, setCity] = useState("");
  let [loading, setLoading] = useState(false);
  const [ currunt, setCurrent] = useState("");

  const cities = [{name:'seoul', krName: "서울"}, {name:'busan', krName: "부산"}, {name:'jeju', krName: "제주"}, {name: 'bucheon', krName:"부천"}]
  const getCurrentlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWheatherCurrentLocation(lat, lon);
    });
  };

  const getWheatherCurrentLocation = async (lat, lon) => {
    let url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c99c75b605a0f389d8dd55aa618c385&units=metric&lang=kr`;
      setLoading(true)
    let response = await fetch(url); // fetch url을 호출해서 데이터를 가져올 때 까지 기다려주세요.
    let data = await response.json(); // response에서 json을 추출하는 걸 좀 기다려줘
    setLoading(false)
    console.log("현재", data.name)
    setCurrent(data.name)
    setCity(data.name);
    // setWeather(data); 셋 웨더를 안 하고, 셋 시티로 통합했음. 버튼 만들기 편하라고.
  };

  const getWeatherByCity = async(city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c99c75b605a0f389d8dd55aa618c385&units=metric&lang=kr`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false)
    console.log("씨티",data)
    setWeather(data);
  }

  useEffect(() => {
    // 렌더가 끝나고 나면 실행되는게 useEffect임.
    city === "" ? getCurrentlocation() : getWeatherByCity(city);
    

  }, [city]);

  return (
    <div>
      <div className='container'>
        
        <WeatherBox weather={weather}></WeatherBox>
        <WeatherButton cities={cities} setCity={setCity} currunt={currunt} city={city}></WeatherButton>
        <BarLoader color="#36d7b7" loading={loading} />
    
      </div>
    </div>
  )
};

export default App;
