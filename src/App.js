import { useState, useEffect } from "react";
import Weather from "./components/weather";
import ListComponent from "./components/listComponent";
import { Grid } from "semantic-ui-react";

function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [data, setData] = useState([]);
  const [forcastData, setForcastData] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      const weatherResponse = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json());

      setData(weatherResponse);

      const forecastResponse = await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json());

      setForcastData(forecastResponse.list); // Set the forecast data to the 'list' property

    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <div className="App">
      {
        (typeof data.main != 'undefined') ? (<Weather weatherData={data} />) : (<div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', width: '200px' }}>Loading...</div>)
      }
      <h2>Forcast</h2>
      {
        forcastData != null ? (
          <Grid columns={6}>
            <Grid.Row>
              {forcastData.map((weatherItem) => (
                <ListComponent weatherData={weatherItem} key={weatherItem.dt} />
              ))}
            </Grid.Row>
          </Grid>
        ) : (<div>Loading...</div>)
      }
    </div>
  );
}

export default App;
