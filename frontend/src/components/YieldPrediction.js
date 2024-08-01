import React, { useState } from 'react';
import axios from 'axios';

const YieldPrediction = () => {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [yieldPrediction, setYieldPrediction] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://ai-agriculture.onrender.com/api/predict-yield', {
                temperature,
                humidity,
                rainfall,
            });
            setYieldPrediction(response.data.yield);
        } catch (error) {
            console.error('Error predicting yield:', error);
        }
    };

    return (
        <div>
            <h2>Crop Yield Prediction</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Temperature:</label>
                    <input
                        type="text"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                    />
                </div>
                <div>
                    <label>Humidity:</label>
                    <input
                        type="text"
                        value={humidity}
                        onChange={(e) => setHumidity(e.target.value)}
                    />
                </div>
                <div>
                    <label>Rainfall:</label>
                    <input
                        type="text"
                        value={rainfall}
                        onChange={(e) => setRainfall(e.target.value)}
                    />
                </div>
                <button type="submit">Predict Yield</button>
            </form>
            {yieldPrediction && (
                <div>
                    <h3>Predicted Yield: {yieldPrediction}</h3>
                </div>
            )}
        </div>
    );
};

export default YieldPrediction;
