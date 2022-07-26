import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from '../actions';


const CarDetails = () => {

    let params = useParams();
    const cars = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const car = cars.find((car) => car.vin === params.vin);

    if (!car) {
        return "No car matched";
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
    )
};

export default CarDetails;