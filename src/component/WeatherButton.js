import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const WeatherButton = ({cities, setCity ,currunt, city}) => {

  // const typing = () => {
  //     let cities_array = []
  //     for (let i = 0; i < cities.length; i++){
        
  //       cities_array.push(<Button variant="outline-warning" key={i}>{cities[i]}</Button>)}
  //     return cities_array
  // }
  return (
    <div>
        <Button variant={ city == currunt ? "warning" : "outline-warning"}
        onClick={()=>setCity(currunt)}>현재 위치</Button>
        {cities.map((items, index) => <Button variant= { city == items.name ? "warning" : "outline-warning"} 
        key={index} onClick={()=>setCity(items.name)}>{items.krName}</Button>
        )}
        {/* {typing()} */}
    

    </div>
  )
}

export default WeatherButton