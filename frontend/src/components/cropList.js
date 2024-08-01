import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cropList.css';

const CropList = () => {
    const [crops, setCrops] = useState([]);
    // const [name, setName] = useState('');
    // const [temperature, setTemperature] = useState('');
    // const [humidity, setHumidity] = useState('');
    const [cropId, setCropId] = useState('');
    const [cropDetail, setCropDetail] = useState(null);

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await axios.get("https://ai-agriculture.onrender.com/crops");
                setCrops(response.data);
            } catch (error) {
                console.error('Error fetching crops:', error);
            }
        };

        fetchCrops();
    }, []);

    const deleteCrop = async (id) => {
        try {
            await axios.delete(`https://ai-agriculture.onrender.com/crops/${id}`);
            setCrops(crops.filter((crop) => crop._id !== id));
        } catch (error) {
            console.error('Error deleting crop:', error);
        }
    };

    // const addCrop = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(`${process.env.REACT_APP_API_URL}/crops`, {
    //             name,
    //             temperature,
    //             humidity,
    //         });
    //         setCrops([...crops, response.data]);
    //         setName('');
    //         setTemperature('');
    //         setHumidity('');
    //     } catch (error) {
    //         console.error('Error adding crop:', error);
    //     }
    // };

    const fetchCropDetail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://ai-agriculture.onrender.com/crops/${cropId}`);
            setCropDetail(response.data);
        } catch (error) {
            console.error('Error fetching crop detail:', error);
            setCropDetail(null);
        }
    };

    return (
        <div className="crop-list-container">
            <h2>Crop List</h2>
            {/* <form className="crop-form" onSubmit={addCrop}>
                <input
                    type="text"
                    placeholder="Crop Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Temperature"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Humidity"
                    value={humidity}
                    onChange={(e) => setHumidity(e.target.value)}
                    required
                />
                <button type="submit">Add Crop</button>
            </form> */}
            <form className="crop-detail-form" onSubmit={fetchCropDetail}>
                <input
                    type="text"
                    placeholder="Enter Crop ID"
                    value={cropId}
                    onChange={(e) => setCropId(e.target.value)}
                    required
                />
                <button id="detail-button" type="submit">Get Crop Details</button>
            </form>
            {cropDetail && (
                <div className="crop-detail">
                    <h3>Crop Detail</h3>
                    <p>Name: {cropDetail.name}</p>
                    <p>Temperature: {cropDetail.temperature}°C</p>
                    <p>Humidity: {cropDetail.humidity}%</p>
                </div>
            )}
            <ul className="crop-list">
                {crops.map((crop) => (
                    <li key={crop._id} className="crop-item">
                        <div className="crop-details">
                            <p>ID: {crop._id}</p>
                            <p>Name: {crop.name}</p>
                            <p>Temperature: {crop.temperature}°C</p>
                            <p>Humidity: {crop.humidity}%</p>
                        </div>
                        <button className="delete-button" onClick={() => deleteCrop(crop._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CropList;
