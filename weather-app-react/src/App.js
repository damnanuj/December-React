import React, { useState } from "react";

import summer from "./imgs/Summer.jpg";
import winter from "./imgs/Winter.jpg";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState(() => {return new Date().getMonth() + 1}); //lazyIntitilization
  // const [month, setMonth] = useState(8)
  function fetchLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        setLatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);

        if(position.coords.latitude>0){
          setHemisphere("Northern Hemisphere")
        }
        else if(position.coords.longitude<0){
          setHemisphere("Southern Hemisphere")
        }
        else{
          setHemisphere("Equator")
        }
      });
    } else {
    }
  }

  return (
    <div className="App">
      <button className="fetchBtn" onClick={fetchLocation}>
        Fetch Location
      </button>
      <h1>Latitude: {latitude}</h1>
      <h1>Longitude: {longitude}</h1>
      <h1>Hemisphere: {hemisphere}</h1>
      <h1>Month: {month}</h1>

      {
        hemisphere &&(
          (hemisphere === "Northern Hemisphere" && month >= 4 && month <= 10) ||
          (hemisphere === "Southern Hemisphere" && (month < 4 || month > 10))
            ) && 
            (
              <div>
                <h1>Summer Season</h1>
                <img src={summer} alt="Summer" />
              </div>
            )
      }
      {
        hemisphere &&(
          (hemisphere === "Northern Hemisphere" && (month < 4 || month > 10)) ||
          (hemisphere === "Southern Hemisphere" && month >= 4 && month <= 10)
          ) && 
            (
              <div>
                <h1>Winter Season</h1>
                <img src={winter} alt="Winter" />
              </div>
          )
      }
    </div>
  )
}

export default App;
