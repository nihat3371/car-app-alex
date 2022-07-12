import React from 'react'
import { useParams } from "react-router-dom";

const CarDetails = () => {


    const { vin } = useParams();

    return (
        <>
            <h1>car</h1>
            <ul>
                this is your {vin}
            </ul>
        </>
    )
}



export default CarDetails;