import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers } from '../actions';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material';;

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

            <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableCell>The car you selected = {car.model_variant}</TableCell>
                        <TableRow>
                            <TableCell>VIN</TableCell>
                            <TableCell>Body</TableCell>
                            <TableCell>Doors</TableCell>
                            <TableCell>Fuel Type</TableCell>
                            <TableCell>Registration</TableCell>
                            <TableCell>Transmission</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={car.vin} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{car.vin}</TableCell>
                            <TableCell>{car.body_type}</TableCell>
                            <TableCell>{car.doors}</TableCell>
                            <TableCell>{car.fuel_type}</TableCell>
                            <TableCell>{car.regno}</TableCell>
                            <TableCell>{car.transmission_type}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default CarDetails;