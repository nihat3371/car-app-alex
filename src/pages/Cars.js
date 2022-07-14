import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


const Cars = () => {
    const [cars, setCars] = useState([]);

    const getCarData = async () => {
        try {
            const data = await axios.get(
                "https://react-challenge-api.azurewebsites.net/vehicles"
            );
            setCars(data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCarData();
    }, []);

    return <Outlet context={{ cars }} />;
};

export default Cars;
