import React from 'react'
import { useOutletContext, useParams } from "react-router-dom";

const CarDetails = () => {
    const { vin } = useParams();
    const { cars } = useOutletContext();

    const car = cars.find((car) => car.vin === vin);

    if (!car) {
        return "No car matches this VIN";
    }

    return (
        <>
            <h1>{car.model_variant}</h1>
            <ul>
                <li>Body: {car.body_type}</li>
                <li>Doors: {car.doors}</li>
                <li>Fuel: {car.fuel_type}</li>
                <li>VIN: {car.vin}</li>
                <li>Registration #: {car.regno}</li>
                <li>Transmission: {car.transmission_type}</li>
            </ul>
        </>
    );
};

export default CarDetails;