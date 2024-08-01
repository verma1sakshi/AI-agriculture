import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CropDetails = () => {
    const { id } = useParams();
    const [crop, setCrop] = useState(null);

    useEffect(() => {
        const fetchCrop = async () => {
            try {
                const response = await axios.get(`https://ai-agriculture.onrender.com/crops/${id}`);
                setCrop(response.data);
            } catch (error) {
                console.error('Error fetching crop:', error);
            }
        };

        fetchCrop();
    }, [id]);

    if (!crop) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Crop Details</h2>
            <p>ID: {crop.id}</p>
            <p>Name: {crop.name}</p>
            <p>Temperature: {crop.temperature}°C</p>
            <p>Humidity: {crop.humidity}%</p>
        </div>
    );
};

export default CropDetails;

