import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import axios from 'axios';



const Cars = () => {

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
        <div> <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            {cars.map((car) => (

                <ListItemButton>
                    <ListItem
                        key={car.vin}
                        disableGutters

                        secondaryAction={
                            <ListItemButton >


                            </ListItemButton>
                        }
                    >
                        <ListItemText primary={car.model_variant} />

                    </ListItem>
                </ListItemButton>

            ))}
        </List></div>
    )
}

export default Cars