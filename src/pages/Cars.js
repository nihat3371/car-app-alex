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


};

export default Cars;