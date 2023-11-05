// Weather Data Display Chart

import React from 'react';
import { Bar } from 'react-chartjs-2';
const Weather = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Temperature (°C)',
                data: data.temperature,
                backgroundColor: '#c6ccca',
                borderColor: '#2f3d38',
                borderWidth: 1,
            }
        ]
    }

    return (
        <div>
            <h2>Weather Chart</h2>
            <Bar data={chartData} />
        </div>
    )
}

export default Weather;

