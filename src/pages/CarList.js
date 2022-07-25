import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../actions";



const CarList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)


    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
            {users.map((car) => (
                <ListItemButton key={users.vin}>
                    <ListItem
                        key={users.vin}
                        disableGutters
                        secondaryAction={
                            <ListItemButton>
                                <Link to={`/cars/${users.vin}`}>details</Link>
                            </ListItemButton>
                        }
                    >
                        <ListItemText key={car.vin} primary={users.model_variant} />
                    </ListItem>
                </ListItemButton>
            ))}
        </List>
    );
};

export default CarList;