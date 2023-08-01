import { useState, useEffect } from "react";
import Weather from "./components/weather";

function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log(result);
        })
    }

    fetchData();
  }, [latitude, longitude]);

  return (
    <div className="App">
      {
        (typeof data.main != 'undefined') ? (<Weather weatherData={data} />) : (<div></div>)
      }
    </div>
  );
}

export default App;
