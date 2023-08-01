import React from 'react';
import './styles.css';
import moment from 'moment';
import { Card } from 'semantic-ui-react';
import SunPng from '../assets/sun.png';
import MoonPng from '../assets/moon.png';

const Weather = ({ weatherData }) => {
    return (
        <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
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
                    <div className='flex' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}>
                        <img src={SunPng} alt='Day' width='24px' />
                        <p>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}</p>
                    </div>
                    <div className='flex' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}>
                        <img src={MoonPng} alt='Night' width='24px' />
                        <p>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}</p>
                    </div>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default Weather