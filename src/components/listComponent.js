import React from 'react';
import "./index.css";
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import SunPng from '../assets/sun.png';
import MoonPng from '../assets/moon.png';

const ListComponent = ({ weatherData }) => {

    return (
        <Card className={`weather-card`} style={{ marginLeft: 'auto', marginRight: 'auto', }}>
            <Card.Content>
                <Card.Header className='header'>
                    {
                        moment(weatherData.dt_txt).hour() >= 5 && moment(weatherData.dt_txt).hour() < 18 ? (<img alt='Day' src={SunPng} width='24px' />) : (<img alt='Day' src={MoonPng} width='24px' />)
                    }
                    {weatherData.name}
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