import React from 'react';
import "./index.css";
import moment from 'moment';
import { Card } from 'semantic-ui-react';

const ListComponent = ({ weatherData }) => {

    const getTimeOfDay = () => {
        const hour = moment(weatherData.dt_txt).hour();
        if (hour >= 5 && hour < 12) {
            return 'morning';
        } else if (hour >= 12 && hour < 18) {
            return 'afternoon';
        } else {
            return 'night';
        }
    };

    const timeOfDay = getTimeOfDay();


    return (
        <Card style={{ marginLeft: 'auto', marginRight: 'auto', }}>
            <Card.Content>
                <Card.Header className='header'>{weatherData.name}
                    <p>Date: {moment().format('LL')} ({moment().format('dddd')})</p></Card.Header>
                <Card.Description>
                    <p>Description: {weatherData.weather[0].main}</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed}</p>
                    <div className='flex' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}>
                        <p>Temperature: <b>{weatherData.main.temp}&deg;C</b></p>
                        <p>Humidity: <b>{weatherData.main.humidity}%</b></p>
                    </div>
                    <div className='footer'>
                        {new Date(weatherData.dt_txt).toLocaleString()}
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ListComponent