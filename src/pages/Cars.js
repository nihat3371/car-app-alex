import axios from "axios";
import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";



const App = () => {


    const [cars, setCars] = useState([])
    const getCarData = async () => {
        try {
            const data = await axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
            setCars(data.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCarData()
    }, [])
    return (

        <div className="App">

            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                {cars.map((car) => (

                    <ListItemButton key={car.vin}>
                        <ListItem
                            key={car.vin}
                            disableGutters

                            secondaryAction={
                                <ListItemButton >
                                    <Link to={`/cardetails/${car.vin}`}>details</Link>

                                </ListItemButton>
                            }
                        >
                            <ListItemText key={car.vin} primary={car.model_variant} />

                        </ListItem>
                    </ListItemButton>

                ))
                }
            </List >
        </div >
    );
};

export default App;
