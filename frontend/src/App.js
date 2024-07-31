// import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CropForm from './components/CropForm';
import CropList from './components/cropList';
import CropDetails from './components/CropDetails';
import EditCropForm from './components/EditCropForm';
import FlaskLink from './components/Flasklink';

const App = () => {
    // const [temperature, setTemperature] = useState('');
    // const [humidity, setHumidity] = useState('');
    // const [rainfall, setRainfall] = useState('');
    // const [prediction, setPrediction] = useState('');
    // const [error, setError] = useState('');

    // const handlePredict = async (e) => {
    //     e.preventDefault();
    //     setError(''); // Clear previous error
    //     try {
    //         const response = await fetch('http://localhost:5000/predict', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 features: {
    //                     temperature: parseFloat(temperature),
    //                     humidity: parseFloat(humidity),
    //                     rainfall: parseFloat(rainfall)
    //                 }
    //             })
    //         });

    //         if (response.ok) {
    //             const data = await response.json();
    //             setPrediction(data.prediction);
    //         } else {
    //             const errorData = await response.json();
    //             setError(errorData.error || 'An error occurred');
    //         }
    //     } catch (err) {
    //         setError('An error occurred while making the prediction.');
    //         console.error(err);
    //     }
    // };

    return (
        <Router>
            <div style={{backgroundColor:'#f4a460'}}>
                {/* <h1 style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '20px',
                    paddingTop:'20px',
                    fontFamily: 'Arial, sans-serif'
                }}>AI in Agriculture</h1> */}
                <div className="App">
                    <header className="App-header">
                        <FlaskLink />
                    </header>
                </div>
                <Routes>
                    <Route path="/" element={<><CropForm /><CropList /></>} />
                    <Route path="/crops/:id" element={<CropDetails />} />
                    <Route path="/edit/:id" element={<EditCropForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
