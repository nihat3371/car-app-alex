import React from 'react'
import { useSelector } from 'react-redux';


const CarDetails = () => {


    const cars = useSelector((state) => state.users.users);
    return (
        <>
            <h1>{cars.model_variant}</h1>
            <ul>
                <li>Body: {cars.body_type}</li>
                <li>Doors: {cars.doors}</li>
                <li>Fuel: {cars.fuel_type}</li>
                <li>VIN: {cars.vin}</li>
                <li>Registration #: {cars.regno}</li>
                <li>Transmission: {cars.transmission_type}</li>
            </ul>
        </>
    )
};

export default CarDetails;