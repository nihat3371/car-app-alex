import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions';


const CarDetails = () => {


    const cars = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);


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