import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCropForm = ({ cropId, setEditing }) => {
    const [name, setName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');

    useEffect(() => {
        const fetchCrop = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/crops/${cropId}`);
                setName(response.data.name);
                setTemperature(response.data.temperature);
                setHumidity(response.data.humidity);
            } catch (error) {
                console.error('Error fetching crop data:', error);
            }
        };

        fetchCrop();
    }, [cropId]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const cropData = { name, temperature, humidity };

        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/crops/${cropId}`, cropData);
            setEditing(false);
        } catch (error) {
            console.error('Error updating crop data:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Edit Crop</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Crop Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Temperature"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Humidity"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditCropForm;
