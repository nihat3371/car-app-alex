import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";



const CarList = () => {
    const { cars } = useOutletContext();

    return (
        <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
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
        </List>
    );
};

export default CarList;