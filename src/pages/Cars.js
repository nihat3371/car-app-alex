import React, { useEffect } from "react";
import { getUsers } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Cars = () => {
    const cars = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (<List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        {cars.map((car) => (
            <ListItemButton key={car.vin}>
                <ListItem
                    key={car.vin}
                    disableGutters
                    secondaryAction={
                        <ListItemButton>
                            <Link to={`/cars/${car.vin}`}>details</Link>
                        </ListItemButton>
                    }
                >
                    <ListItemText key={car.vin} primary={car.model_variant} />
                </ListItem>
            </ListItemButton>
        ))}
    </List>);


};

export default Cars;